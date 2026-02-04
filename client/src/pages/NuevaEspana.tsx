import ZoneLanding from "@/components/ZoneLanding";

export default function NuevaEspana() {
    return (
        <ZoneLanding
            zoneName="Nueva España"
            zoneDescription="Cerrajería urgente en Nueva España, Chamartín. Expertos en seguridad en la zona de Alberto Alcocer, Pastrana y Platerías."
            zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15180.370535352!2d-3.67!3d40.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228c285eb6697%3A0x2601ad0303030305!2sNueva%20Espa%C3%B1a%2C%20Madrid!5e0!3m2!1ses!2ses!4v1707044000000!5m2!1ses!2ses"
            commonProblems={[
                "Cambio de cerraduras Mottura, Tesa y Fichet.",
                "Apertura de cajas fuertes y puertas acorazadas.",
                "Sistemas de seguridad para urbanizaciones.",
                "Cerrajero rápido en Nueva España 24 horas.",
            ]}
        />
    );
}
