import { useState, useEffect } from 'react';

interface PricingInfo {
  currentPrice: number;
  isNormalHours: boolean;
  nextChangeTime: Date | null;
  minutesUntilChange: number | null;
  showWarning: boolean;
}

/**
 * Hook para gestionar precios dinámicos según horario
 * Horario Normal: Lunes-Viernes 08:00-19:00 = 90€
 * Fuera de Horario: Resto = 120€
 */
export function useDynamicPricing(): PricingInfo {
  const [pricingInfo, setPricingInfo] = useState<PricingInfo>({
    currentPrice: 90,
    isNormalHours: true,
    nextChangeTime: null,
    minutesUntilChange: null,
    showWarning: false,
  });

  useEffect(() => {
    const calculatePricing = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      // Horario normal: Lunes (1) a Viernes (5), de 08:00 a 19:00
      const isWeekday = day >= 1 && day <= 5;
      const isWithinHours = currentMinutes >= 8 * 60 && currentMinutes < 19 * 60;
      const isNormalHours = isWeekday && isWithinHours;

      const currentPrice = isNormalHours ? 90 : 120;

      // Calcular próximo cambio de horario
      let nextChangeTime: Date | null = null;
      let minutesUntilChange: number | null = null;

      if (isWeekday) {
        if (currentMinutes < 8 * 60) {
          // Antes de las 8:00, próximo cambio a las 8:00 de hoy
          nextChangeTime = new Date(now);
          nextChangeTime.setHours(8, 0, 0, 0);
        } else if (currentMinutes < 19 * 60) {
          // Entre 8:00 y 19:00, próximo cambio a las 19:00 de hoy
          nextChangeTime = new Date(now);
          nextChangeTime.setHours(19, 0, 0, 0);
        } else {
          // Después de las 19:00, próximo cambio a las 8:00 del día siguiente
          nextChangeTime = new Date(now);
          nextChangeTime.setDate(now.getDate() + 1);
          nextChangeTime.setHours(8, 0, 0, 0);
        }
      } else {
        // Fin de semana, próximo cambio el lunes a las 8:00
        const daysUntilMonday = day === 0 ? 1 : 8 - day; // Si es domingo (0), falta 1 día; si es sábado (6), faltan 2 días
        nextChangeTime = new Date(now);
        nextChangeTime.setDate(now.getDate() + daysUntilMonday);
        nextChangeTime.setHours(8, 0, 0, 0);
      }

      if (nextChangeTime) {
        const diffMs = nextChangeTime.getTime() - now.getTime();
        minutesUntilChange = Math.floor(diffMs / (1000 * 60));
      }

      // Mostrar aviso si faltan 30 minutos o menos
      const showWarning = minutesUntilChange !== null && minutesUntilChange > 0 && minutesUntilChange <= 30;

      setPricingInfo({
        currentPrice,
        isNormalHours,
        nextChangeTime,
        minutesUntilChange,
        showWarning,
      });
    };

    // Calcular inmediatamente
    calculatePricing();

    // Actualizar cada minuto
    const interval = setInterval(calculatePricing, 60000);

    return () => clearInterval(interval);
  }, []);

  return pricingInfo;
}

/**
 * Obtener texto descriptivo del horario actual
 */
export function getPricingText(isNormalHours: boolean): string {
  if (isNormalHours) {
    return "Horario Normal (L-V 08:00-19:00)";
  } else {
    return "Horario de Urgencias";
  }
}

/**
 * Obtener mensaje de aviso de cambio de tarifa
 */
export function getWarningMessage(minutesUntilChange: number, isNormalHours: boolean): string {
  if (isNormalHours) {
    return `⏰ En ${minutesUntilChange} minutos cambiamos a tarifa de urgencias (120€)`;
  } else {
    return `⏰ En ${minutesUntilChange} minutos cambiamos a tarifa normal (90€)`;
  }
}

