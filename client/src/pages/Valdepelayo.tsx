import ZoneLanding from "@/components/ZoneLanding";

export default function Valdepelayo() {
  return (
    <ZoneLanding
      zoneName="Valdepelayo"
      zoneDescription="Servicio de cerrajería 24 horas en Valdepelayo. Solucionamos cualquier problema con tu puerta o cerradura en tiempo récord."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6082.567890123456!2d-3.770!3d40.325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418a0000000001%3A0x0000000000000000!2sValdepelayo%2C%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Apertura de puertas blindadas sin llave.",
        "Sustitución de cerraduras antiguas por modelos antibumping.",
        "Amaestramiento de llaves para comunidades de vecinos.",
        "Atención rápida en la zona del Parque de Valdepelayo.",
      ]}
    />
  );
}
