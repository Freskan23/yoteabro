import ZoneLanding from "@/components/ZoneLanding";

export default function Prosperidad() {
    return (
        <ZoneLanding
            zoneName="Prosperidad"
            zoneDescription="Cerrajeros en Prosperidad, Chamartín. Atendemos rápido en la zona de López de Hoyos, Auditorio Nacional y Corazón de María."
            zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15180.370535352!2d-3.675!3d40.445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228c285eb6697%3A0x2601ad0303030303!2sProsperidad%2C%20Madrid!5e0!3m2!1ses!2ses!4v1707044000000!5m2!1ses!2ses"
            commonProblems={[
                "Apertura urgente de comercios en López de Hoyos.",
                "Cambio de cerraduras tras robo o pérdida de llaves.",
                "Reparación de persianas metálicas y cierres locales.",
                "Cerrajero disponible 24h en el barrio de 'La Prospe'.",
            ]}
        />
    );
}
