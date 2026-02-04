import ZoneLanding from "@/components/ZoneLanding";

export default function ElViso() {
    return (
        <ZoneLanding
            zoneName="El Viso"
            zoneDescription="Cerrajeros en El Viso, Chamartín. Llegamos en 20 minutos para cualquier urgencia en la zona de Serrano, Concha Espina y alrededores."
            zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12144.130386266!2d-3.6826075!3d40.4497675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228ef87440939%3A0x633dcb285eb6697b!2sEl%20Viso%2C%2028002%20Madrid!5e0!3m2!1ses!2ses!4v1707044000000!5m2!1ses!2ses"
            commonProblems={[
                "Apertura de puertas en viviendas de lujo sin daños.",
                "Instalación de cerraduras de alta seguridad invisibles.",
                "Mantenimiento de sistemas de acceso electrónico.",
                "Asistencia técnica 24 horas en el barrio de El Viso.",
            ]}
        />
    );
}
