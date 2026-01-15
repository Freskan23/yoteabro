import ZoneLanding from "@/components/ZoneLanding";

export default function Zarzaquemada() {
  return (
    <ZoneLanding
      zoneName="Zarzaquemada"
      zoneDescription="¿Vives en Zarzaquemada? Llegamos volando a la Avenida de Europa, Monegros o cualquier bloque de la zona. Servicio 24h real."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12165.678901234567!2d-3.755!3d40.335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418a0000000001%3A0x0000000000000000!2sZarzaquemada%2C%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Abrimos puertas en los bloques altos de Zarzaquemada sin romper nada.",
        "Arreglamos cierres de tiendas en la zona comercial de Monegros.",
        "Reparación de cerraduras atascadas en comunidades de vecinos.",
        "Ponemos cerrojos FAC anti-bumping, ideales para los pisos de la zona.",
      ]}
    />
  );
}
