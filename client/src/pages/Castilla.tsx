import ZoneLanding from "@/components/ZoneLanding";

export default function Castilla() {
    return (
        <ZoneLanding
            zoneName="Castilla"
            zoneDescription="Cerrajeros en el barrio de Castilla, Chamartín. Atendemos en Plaza de Castilla, Paseo de la Castellana norte y zona de Chamartín."
            zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12144.130386266!2d-3.68!3d40.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228ef87440939%3A0x633dcb285eb6697d!2sCastilla%2C%20Madrid!5e0!3m2!1ses!2ses!4v1707044000000!5m2!1ses!2ses"
            commonProblems={[
                "Apertura de puertas en viviendas y oficinas.",
                "Cambio de cilindros de perfil europeo.",
                "Instalación de muelles cierrapuertas.",
                "Cerrajeros 24h cerca de la estación de Chamartín.",
            ]}
        />
    );
}
