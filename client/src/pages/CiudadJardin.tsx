import ZoneLanding from "@/components/ZoneLanding";

export default function CiudadJardin() {
    return (
        <ZoneLanding
            zoneName="Ciudad Jardín"
            zoneDescription="Cerrajeros en Ciudad Jardín, Chamartín. Servicio rápido cerca del Parque de Berlín y Príncipe de Vergara."
            zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15180.370535352!2d-3.67!3d40.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228c285eb6697%3A0x2601ad0303030304!2sCiudad%20Jard%C3%ADn%2C%20Madrid!5e0!3m2!1ses!2ses!4v1707044000000!5m2!1ses!2ses"
            commonProblems={[
                "Sustitución de bombines antibumping.",
                "Apertura de puertas sin rotura 24 horas.",
                "Asesoramiento en seguridad para el hogar.",
                "Llegamos en 20 minutos a Ciudad Jardín.",
            ]}
        />
    );
}
