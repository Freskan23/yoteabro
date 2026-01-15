import ZoneLanding from "@/components/ZoneLanding";

export default function Centro() {
  return (
    <ZoneLanding
      zoneName="Leganés Centro"
      zoneDescription="Cerrajeros en el centro de Leganés. Llegamos en minutos a la Plaza Mayor, Avenida de Fuenlabrada y alrededores. Servicio 24h."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6082.987654321098!2d-3.765!3d40.330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418a0000000001%3A0x0000000000000000!2sLegan%C3%A9s%20Centro%2C%20Madrid!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Apertura de puertas en edificios antiguos y modernos.",
        "Reparación de cierres metálicos en comercios del centro.",
        "Cambio de cerraduras urgente por robo o pérdida.",
        "Instalación de muelles cierrapuertas en portales.",
      ]}
    />
  );
}
