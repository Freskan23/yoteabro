import ZoneLanding from "@/components/ZoneLanding";

export default function LaFortuna() {
  return (
    <ZoneLanding
      zoneName="La Fortuna"
      zoneDescription="¿Urgencia en La Fortuna? Estamos al lado del Parque Serafín Díez Antón. Llegamos antes de que te des cuenta."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6081.123456789012!2d-3.780!3d40.360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418a0000000001%3A0x0000000000000000!2sLa%20Fortuna%2C%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Abrimos puertas en las casas bajas y pisos de La Fortuna.",
        "Arreglamos cierres de tiendas y bares del barrio.",
        "Refuerza la seguridad de tu casa con un cerrojo extra.",
        "Atención inmediata cerca del Parque Serafín Díez Antón.",
      ]}
    />
  );
}
