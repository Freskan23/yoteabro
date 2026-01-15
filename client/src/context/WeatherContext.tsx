
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Interfaces (copiadas de useWeather para mantener consistencia)
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

const WeatherContext = createContext<WeatherData | undefined>(undefined);

// Función auxiliar (copiada de useWeather.ts original para contener toda la lógica)
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
            isAdverse: code >= 63
        };
    } else if (code >= 66 && code <= 67) {
        return { description: 'Lluvia helada', icon: '🌧️', isAdverse: true };
    } else if (code >= 71 && code <= 75) {
        const intensity = code === 71 ? 'ligera' : code === 73 ? 'moderada' : 'intensa';
        return {
            description: `Nieve ${intensity}`,
            icon: '❄️',
            isAdverse: true
        };
    } else if (code === 77) {
        return { description: 'Granizo', icon: '🧊', isAdverse: true };
    } else if (code >= 80 && code <= 82) {
        const intensity = code === 80 ? 'ligeros' : code === 81 ? 'moderados' : 'violentos';
        return {
            description: `Chubascos ${intensity}`,
            icon: '🌧️',
            isAdverse: code >= 81
        };
    } else if (code >= 85 && code <= 86) {
        return { description: 'Chubascos de nieve', icon: '❄️', isAdverse: true };
    } else if (code >= 95 && code <= 99) {
        return { description: 'Tormenta', icon: '⛈️', isAdverse: true };
    }

    return { description: 'Desconocido', icon: '🌡️', isAdverse: false };
}

export function WeatherProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<WeatherData>({
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
        // Si ya tenemos datos recientes (podríamos implementar cache más complejo con timestamp, 
        // pero useEffect con array vacío asegura que esto corra 1 vez al montar el Provider)

        const fetchWeather = async () => {
            try {
                const latitude = 40.3280;
                const longitude = -3.7635;
                const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,precipitation,weather_code&timezone=Europe/Madrid`;

                const response = await fetch(url);
                if (!response.ok) throw new Error('Error API');

                const json = await response.json();
                const current = json.current;
                const { description, icon, isAdverse } = interpretWeatherCode(current.weather_code, current.precipitation || 0);

                setData({
                    temperature: Math.round(current.temperature_2m),
                    weatherCode: current.weather_code,
                    weatherDescription: description,
                    precipitation: current.precipitation || 0,
                    isAdverseWeather: isAdverse,
                    weatherIcon: icon,
                    loading: false,
                    error: null,
                });
            } catch (err) {
                console.error("Error weather provider:", err);
                setData(prev => ({ ...prev, loading: false, error: 'Error clima' }));
            }
        };

        fetchWeather();
        // Refrescar cada 15 min
        const interval = setInterval(fetchWeather, 15 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <WeatherContext.Provider value={data}>
            {children}
        </WeatherContext.Provider>
    );
}

export function useWeather() {
    const context = useContext(WeatherContext);
    if (context === undefined) {
        throw new Error('useWeather must be used within a WeatherProvider');
    }
    return context;
}

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
