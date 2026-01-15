import ZoneLanding from "@/components/ZoneLanding";

export default function SanNicasio() {
  return (
    <ZoneLanding
      zoneName="San Nicasio"
      zoneDescription="¿Problemas con la cerradura en San Nicasio? Atendemos urgencias en la zona de la Ermita, Río Duero y alrededores en tiempo récord."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6082.839450617284!2d-3.775!3d40.330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418a0000000001%3A0x0000000000000000!2sSan%20Nicasio%2C%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Abrimos puertas antiguas y modernas en todo el barrio de San Nicasio.",
        "Modernizamos la seguridad de tu puerta sin dañar la estética clásica.",
        "Reparación urgente de cierres para los comercios de toda la vida del barrio.",
        "Urgencias 24 horas cerca de la estación de Renfe.",
      ]}
    />
  );
}
