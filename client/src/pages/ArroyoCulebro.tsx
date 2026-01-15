import ZoneLanding from "@/components/ZoneLanding";

export default function ArroyoCulebro() {
  return (
    <ZoneLanding
      zoneName="Arroyo Culebro"
      zoneDescription="¿Vives en los chalets o pisos de Arroyo Culebro? Conocemos bien la zona y llegamos rápido por la M-50."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6083.123456789012!2d-3.760!3d40.320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418a0000000001%3A0x0000000000000000!2sArroyo%20Culebro%2C%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Arreglamos la puerta del garaje para que no se quede atascada.",
        "Especialistas en puertas de chalets y unifamiliares de Arroyo Culebro.",
        "Mejoramos la seguridad de tu chalet con cerrojos y escudos.",
        "Reparación de cerraduras tras intentos de robo.",
      ]}
    />
  );
}
