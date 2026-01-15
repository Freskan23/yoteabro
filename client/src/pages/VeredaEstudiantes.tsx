import ZoneLanding from "@/components/ZoneLanding";

export default function VeredaEstudiantes() {
  return (
    <ZoneLanding
      zoneName="Vereda de los Estudiantes"
      zoneDescription="Cerrajeros económicos en Vereda de los Estudiantes. Estamos muy cerca de ti para ofrecerte el mejor servicio al mejor precio."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6081.987654321098!2d-3.755!3d40.315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418a0000000001%3A0x0000000000000000!2sVereda%20de%20los%20Estudiantes%2C%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Cambio de bombines en puertas de acceso a viviendas.",
        "Reparación de cerraduras en naves industriales cercanas.",
        "Instalación de sistemas de seguridad adicionales.",
        "Aperturas urgentes 24 horas.",
      ]}
    />
  );
}
