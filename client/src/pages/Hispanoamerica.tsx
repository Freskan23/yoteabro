import ZoneLanding from "@/components/ZoneLanding";

export default function Hispanoamerica() {
    return (
        <ZoneLanding
            zoneName="Hispanoamérica"
            zoneDescription="Cerrajeros profesionales en Hispanoamérica, Chamartín. Atendemos rápido en la zona del Santiago Bernabéu, Colombia y Pío XII."
            zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12144.130386266!2d-3.68!3d40.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228ef87440939%3A0x633dcb285eb6697c!2sHispanoam%C3%A9rica%2C%20Madrid!5e0!3m2!1ses!2ses!4v1707044000000!5m2!1ses!2ses"
            commonProblems={[
                "Apertura de puertas de alta seguridad.",
                "Instalación de cerrojos suplementarios tipo FAC.",
                "Servicio para oficinas y sedes corporativas.",
                "Urgencias de cerrajería en Hispanoamérica las 24h.",
            ]}
        />
    );
}
