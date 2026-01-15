import ZoneLanding from "@/components/ZoneLanding";

export default function LosSantos() {
  return (
    <ZoneLanding
      zoneName="Los Santos"
      zoneDescription="Tu cerrajero de confianza en el barrio de Los Santos. Rapidez, eficacia y precios transparentes para todos nuestros vecinos."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6082.123456789012!2d-3.765!3d40.335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418a0000000001%3A0x0000000000000000!2sLos%20Santos%2C%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Apertura de puertas traseras y de garaje.",
        "Actualización de seguridad en viviendas unifamiliares.",
        "Reparación de cerraduras oxidadas o antiguas.",
        "Servicio de urgencia nocturno.",
      ]}
    />
  );
}
