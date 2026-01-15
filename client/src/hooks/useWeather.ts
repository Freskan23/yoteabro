import { useState, useEffect } from 'react';

interface WeatherData {
  temperature: number;
  weatherCode: number;
  weatherDescription: string;
  precipitation: number;
  isAdverseWeather: boolean;
  weatherIcon: string;
  loading: boolean;
  error: string | null;
}

/**
 * Hook para obtener datos meteorológicos de Leganés
 * Usa Open-Meteo API (gratuita, sin necesidad de API key)
 * Coordenadas de Leganés: 40.3280° N, 3.7635° W
 */
export function useWeather(): WeatherData {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    temperature: 0,
    weatherCode: 0,
    weatherDescription: 'Cargando...',
    precipitation: 0,
    isAdverseWeather: false,
    weatherIcon: '☀️',
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Coordenadas de Leganés
        const latitude = 40.3280;
        const longitude = -3.7635;

        // Open-Meteo API - Gratuita, sin API key
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,precipitation,weather_code&timezone=Europe/Madrid`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener datos meteorológicos');
        }

        const data = await response.json();
        const current = data.current;

        const temperature = Math.round(current.temperature_2m);
        const weatherCode = current.weather_code;
        const precipitation = current.precipitation || 0;

        // Interpretar código meteorológico WMO
        const { description, icon, isAdverse } = interpretWeatherCode(weatherCode, precipitation);

        setWeatherData({
          temperature,
          weatherCode,
          weatherDescription: description,
          precipitation,
          isAdverseWeather: isAdverse,
          weatherIcon: icon,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error('Error fetching weather:', error);
        setWeatherData(prev => ({
          ...prev,
          loading: false,
          error: 'No se pudo obtener el tiempo',
        }));
      }
    };

    // Obtener datos inmediatamente
    fetchWeather();

    // Actualizar cada 15 minutos
    const interval = setInterval(fetchWeather, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return weatherData;
}

/**
 * Interpretar códigos meteorológicos WMO
 * https://open-meteo.com/en/docs
 */
function interpretWeatherCode(code: number, precipitation: number): {
  description: string;
  icon: string;
  isAdverse: boolean;
} {
  // Códigos WMO Weather interpretation
  if (code === 0) {
    return { description: 'Despejado', icon: '☀️', isAdverse: false };
  } else if (code === 1) {
    return { description: 'Mayormente despejado', icon: '🌤️', isAdverse: false };
  } else if (code === 2) {
    return { description: 'Parcialmente nublado', icon: '⛅', isAdverse: false };
  } else if (code === 3) {
    return { description: 'Nublado', icon: '☁️', isAdverse: false };
  } else if (code === 45 || code === 48) {
    return { description: 'Niebla', icon: '🌫️', isAdverse: true };
  } else if (code >= 51 && code <= 55) {
    return { description: 'Llovizna', icon: '🌦️', isAdverse: false };
  } else if (code >= 56 && code <= 57) {
    return { description: 'Llovizna helada', icon: '🌧️', isAdverse: true };
  } else if (code >= 61 && code <= 65) {
    const intensity = code === 61 ? 'ligera' : code === 63 ? 'moderada' : 'intensa';
    return { 
      description: `Lluvia ${intensity}`, 
      icon: '🌧️', 
      isAdverse: code >= 63 // Lluvia moderada o intensa
    };
  } else if (code >= 66 && code <= 67) {
    return { description: 'Lluvia helada', icon: '🌧️', isAdverse: true };
  } else if (code >= 71 && code <= 75) {
    const intensity = code === 71 ? 'ligera' : code === 73 ? 'moderada' : 'intensa';
    return { 
      description: `Nieve ${intensity}`, 
      icon: '❄️', 
      isAdverse: true // Cualquier nieve es adversa
    };
  } else if (code === 77) {
    return { description: 'Granizo', icon: '🧊', isAdverse: true };
  } else if (code >= 80 && code <= 82) {
    const intensity = code === 80 ? 'ligeros' : code === 81 ? 'moderados' : 'violentos';
    return { 
      description: `Chubascos ${intensity}`, 
      icon: '🌧️', 
      isAdverse: code >= 81 // Chubascos moderados o violentos
    };
  } else if (code >= 85 && code <= 86) {
    return { description: 'Chubascos de nieve', icon: '❄️', isAdverse: true };
  } else if (code >= 95 && code <= 99) {
    return { description: 'Tormenta', icon: '⛈️', isAdverse: true };
  }

  return { description: 'Desconocido', icon: '🌡️', isAdverse: false };
}

/**
 * Obtener mensaje de aviso según condiciones meteorológicas
 */
export function getWeatherWarningMessage(weatherDescription: string): string {
  const desc = weatherDescription.toLowerCase();
  
  if (desc.includes('nieve')) {
    return '❄️ Condiciones de nieve en Leganés. Tiempo de llegada puede extenderse a 40-50 minutos';
  } else if (desc.includes('hielo') || desc.includes('helada')) {
    return '🧊 Alerta por hielo en las calles. Tiempo de llegada puede extenderse a 40-50 minutos';
  } else if (desc.includes('tormenta')) {
    return '⛈️ Tormenta en la zona. Tiempo de llegada puede extenderse a 35-45 minutos';
  } else if (desc.includes('lluvia intensa') || desc.includes('chubascos violentos') || desc.includes('chubascos moderados')) {
    return '🌧️ Lluvia intensa en Leganés. Tiempo de llegada puede extenderse a 30-40 minutos';
  } else if (desc.includes('niebla')) {
    return '🌫️ Niebla densa en la zona. Tiempo de llegada puede extenderse a 30-40 minutos';
  }
  
  return '';
}
