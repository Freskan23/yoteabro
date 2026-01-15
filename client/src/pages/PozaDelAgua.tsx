import ZoneLanding from "@/components/ZoneLanding";

export default function PozaDelAgua() {
  return (
    <ZoneLanding
      zoneName="Poza del Agua"
      zoneDescription="Servicio de cerrajería urgente en Poza del Agua. Conocemos los sistemas de seguridad de tu barrio y ofrecemos soluciones rápidas."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6081.345678901234!2d-3.790!3d40.340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418a0000000001%3A0x0000000000000000!2sPoza%20del%20Agua%2C%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Cambio de bombines de obra por alta seguridad.",
        "Apertura de puertas bloqueadas sin daños.",
        "Instalación de sistemas antibumping en puertas nuevas.",
        "Atención rápida para vecinos de Poza del Agua.",
      ]}
    />
  );
}
