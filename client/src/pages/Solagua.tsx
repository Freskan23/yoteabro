import ZoneLanding from "@/components/ZoneLanding";

export default function Solagua() {
  return (
    <ZoneLanding
      zoneName="Solagua"
      zoneDescription="Cerrajeros profesionales en Solagua. Especialistas en las cerraduras de las nuevas urbanizaciones. Garantía y seguridad total."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6081.567890123456!2d-3.785!3d40.345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418a0000000001%3A0x0000000000000000!2sSolagua%2C%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Apertura de puertas acorazadas de última generación.",
        "Instalación de mirillas digitales y cerrojos invisibles.",
        "Amaestramiento de llaves para zonas comunes y piscina.",
        "Reparación de cerraduras en urbanizaciones nuevas.",
      ]}
    />
  );
}
