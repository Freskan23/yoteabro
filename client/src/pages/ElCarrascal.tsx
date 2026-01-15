import ZoneLanding from "@/components/ZoneLanding";

export default function ElCarrascal() {
  return (
    <ZoneLanding
      zoneName="El Carrascal"
      zoneDescription="¿Vives en El Carrascal? Estamos a un paso de Parquesur y la Avenida Rey Juan Carlos I. Llegamos antes de que te des cuenta."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6082.839450617284!2d-3.745!3d40.340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418a0000000001%3A0x0000000000000000!2sEl%20Carrascal%2C%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Expertos en abrir puertas de las urbanizaciones del Carrascal.",
        "Instalamos bombines anti-bumping para proteger tu piso.",
        "Arreglamos cerraduras atascadas en cualquier bloque de la zona.",
        "Servicio rápido para locales comerciales en el centro comercial.",
      ]}
    />
  );
}
