import ZoneLanding from "@/components/ZoneLanding";

export default function LeganesNorte() {
  return (
    <ZoneLanding
      zoneName="Leganés Norte"
      zoneDescription="¿Vives en Leganés Norte? Estamos a un paso de la Ronda Norte y la Biblioteca Central. Llegamos volando."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6082.839450617284!2d-3.750!3d40.350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418a0000000001%3A0x0000000000000000!2sLegan%C3%A9s%20Norte%2C%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Expertos en las puertas de seguridad de los pisos nuevos de Leganés Norte.",
        "Instalamos mirillas digitales y cerrojos invisibles.",
        "Arreglamos cerraduras de trasteros y zonas comunes.",
        "Servicio rápido cerca de la Biblioteca Central.",
      ]}
    />
  );
}
