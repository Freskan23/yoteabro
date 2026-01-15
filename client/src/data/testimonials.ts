export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  date: string;
  service: string;
  location: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María G.",
    rating: 5,
    date: "2025-10-20",
    service: "Apertura de puertas",
    location: "Casco Antiguo",
    text: "Me quedé fuera de casa a las 11 de la noche con mi bebé. Llamé y llegaron en 20 minutos exactos. El cerrajero fue muy profesional y abrió la puerta sin ningún daño. Precio justo, 90€ como me dijeron por teléfono. Totalmente recomendable."
  },
  {
    id: 2,
    name: "Carlos M.",
    rating: 5,
    date: "2025-10-18",
    service: "Cambio de cerradura",
    location: "Monte del Pilar",
    text: "Excelente servicio. Cambié la cerradura de mi casa en Monte del Pilar después de una mudanza. Me asesoraron sobre qué tipo de cerradura era mejor para mi puerta y el trabajo quedó perfecto. Muy profesionales."
  },
  {
    id: 3,
    name: "Ana P.",
    rating: 5,
    date: "2025-10-15",
    service: "Cambio de bombín",
    location: "Zona Centro",
    text: "Necesitaba cambiar el bombín urgente porque se había roto por dentro. Vinieron en menos de media hora, trajeron varios modelos para elegir y lo instalaron en 15 minutos. Servicio rápido y eficiente."
  },
  {
    id: 4,
    name: "Javier R.",
    rating: 5,
    date: "2025-10-12",
    service: "Amaestramiento",
    location: "Los Negrillos",
    text: "Contratamos el servicio de amaestramiento para nuestra comunidad de 24 viviendas. El trabajo fue impecable, ahora cada vecino tiene su llave y el presidente tiene la maestra. Todo funcionando perfectamente."
  },
  {
    id: 5,
    name: "Laura S.",
    rating: 5,
    date: "2025-10-10",
    service: "Apertura de puertas",
    location: "El Carralero",
    text: "Perdí las llaves en el gimnasio y necesitaba entrar urgente. El cerrajero llegó rapidísimo y abrió sin romper nada. Además me hizo un duplicado en el momento. Muy agradecida por la rapidez y profesionalidad."
  },
  {
    id: 6,
    name: "Miguel Á.",
    rating: 5,
    date: "2025-10-08",
    service: "Cambio de cerradura",
    location: "Valle del Arcipreste",
    text: "Después de un intento de robo decidí poner una cerradura de máxima seguridad. Me recomendaron una Mottura y estoy encantado. La instalación fue rápida y ahora duermo mucho más tranquilo. Gran servicio."
  },
  {
    id: 7,
    name: "Patricia L.",
    rating: 5,
    date: "2025-10-05",
    service: "Apertura de puertas",
    location: "Casco Antiguo",
    text: "Se me atascó la cerradura un domingo por la mañana. Llamé y en 25 minutos estaban aquí. Abrieron sin problemas y me arreglaron el mecanismo para que no volviera a pasar. Muy profesionales."
  },
  {
    id: 8,
    name: "Roberto F.",
    rating: 5,
    date: "2025-10-03",
    service: "Cambio de bombín",
    location: "Gran Vía",
    text: "Cambié todos los bombines de mi piso después de perder un juego de llaves. Me pusieron bombines antibumping de alta seguridad. El precio fue muy razonable y el trabajo impecable. Los recomiendo sin dudarlo."
  },
  {
    id: 9,
    name: "Elena V.",
    rating: 5,
    date: "2025-10-01",
    service: "Apertura de puertas",
    location: "Monte del Pilar",
    text: "Mi hijo cerró la puerta desde dentro con el pestillo puesto y no podía salir. Vinieron en 15 minutos y lo solucionaron sin asustar al niño. Muy amables y profesionales. Gracias por todo."
  },
  {
    id: 10,
    name: "Francisco J.",
    rating: 5,
    date: "2025-09-28",
    service: "Amaestramiento",
    location: "Zona Centro",
    text: "Servicio de amaestramiento para mi empresa. Ahora tenemos control total de accesos con diferentes niveles de llaves. El cerrajero nos explicó todo perfectamente y el sistema funciona de maravilla."
  },
  {
    id: 11,
    name: "Isabel M.",
    rating: 5,
    date: "2025-09-25",
    service: "Cambio de cerradura",
    location: "Los Negrillos",
    text: "Cambié la cerradura vieja de mi casa por una moderna de seguridad. Me enseñaron varios modelos y me ayudaron a elegir el mejor para mi puerta. Instalación perfecta y precio ajustado."
  },
  {
    id: 12,
    name: "David H.",
    rating: 5,
    date: "2025-09-22",
    service: "Apertura de puertas",
    location: "El Carralero",
    text: "Cerradura bloqueada a las 7 de la mañana cuando iba a trabajar. Llamé y llegaron antes de las 8. Abrieron rápido y me arreglaron la cerradura para que no volviera a pasar. Servicio de 10."
  },
  {
    id: 13,
    name: "Carmen R.",
    rating: 5,
    date: "2025-09-20",
    service: "Cambio de bombín",
    location: "Valle del Arcipreste",
    text: "El bombín de mi puerta se rompió y no podía ni abrir ni cerrar bien. Vinieron el mismo día, me pusieron uno nuevo de alta seguridad y ahora funciona perfectamente. Muy contentos con el servicio."
  },
  {
    id: 14,
    name: "Antonio G.",
    rating: 5,
    date: "2025-09-18",
    service: "Apertura de puertas",
    location: "Casco Antiguo",
    text: "Llave partida dentro de la cerradura. Pensé que iba a ser un desastre pero el cerrajero la sacó sin problemas y me hizo llaves nuevas. Todo en menos de una hora. Muy profesional."
  },
  {
    id: 15,
    name: "Rocío N.",
    rating: 5,
    date: "2025-09-15",
    service: "Cambio de cerradura",
    location: "Gran Vía",
    text: "Quería mejorar la seguridad de mi casa y me instalaron una cerradura multipunto. La diferencia es increíble, ahora me siento mucho más segura. El cerrajero muy profesional y educado."
  },
  {
    id: 16,
    name: "José Luis T.",
    rating: 5,
    date: "2025-09-12",
    service: "Amaestramiento",
    location: "Monte del Pilar",
    text: "Sistema de amaestramiento para nuestro edificio de oficinas. Perfecto para controlar accesos de empleados y limpieza. El trabajo fue rápido y el resultado excelente. Muy recomendable."
  },
  {
    id: 17,
    name: "Marta D.",
    rating: 5,
    date: "2025-09-10",
    service: "Apertura de puertas",
    location: "Zona Centro",
    text: "Puerta atascada después de una tormenta. No abría ni con llave. Llamé y vinieron enseguida. La ajustaron y ahora funciona perfectamente. Precio correcto y trato excelente."
  },
  {
    id: 18,
    name: "Pedro S.",
    rating: 5,
    date: "2025-09-08",
    service: "Cambio de bombín",
    location: "Los Negrillos",
    text: "Me recomendaron cambiar el bombín por uno antibumping después de varios robos en la zona. Vino el mismo día que llamé y me puso uno de máxima seguridad. Ahora estoy más tranquilo."
  },
  {
    id: 19,
    name: "Silvia B.",
    rating: 5,
    date: "2025-09-05",
    service: "Apertura de puertas",
    location: "El Carralero",
    text: "Me dejé las llaves dentro del coche y las del piso también. Doble problema. El cerrajero me abrió la casa en 10 minutos y me ayudó a llamar a la grúa. Muy amable y resolutivo."
  },
  {
    id: 20,
    name: "Raúl C.",
    rating: 5,
    date: "2025-09-03",
    service: "Cambio de cerradura",
    location: "Valle del Arcipreste",
    text: "Cerradura antigua que daba problemas. Me pusieron una nueva Ezcurra de alta seguridad. La instalación fue rápida y limpia. Muy profesionales y el precio muy razonable."
  },
  {
    id: 21,
    name: "Beatriz O.",
    rating: 5,
    date: "2025-09-01",
    service: "Apertura de puertas",
    location: "Casco Antiguo",
    text: "Emergencia a las 2 de la madrugada. Puerta cerrada y bebé llorando dentro. Llegaron en 18 minutos y abrieron sin hacer ruido. Profesionalidad y rapidez cuando más lo necesitaba. Gracias."
  },
  {
    id: 22,
    name: "Sergio P.",
    rating: 5,
    date: "2025-08-29",
    service: "Cambio de bombín",
    location: "Gran Vía",
    text: "Bombín atascado que no giraba bien. Me lo cambiaron por uno nuevo con llaves incopiables. El cerrajero me explicó cómo mantenerlo y ahora funciona perfecto. Muy buen servicio."
  },
  {
    id: 23,
    name: "Cristina A.",
    rating: 5,
    date: "2025-08-26",
    service: "Amaestramiento",
    location: "Monte del Pilar",
    text: "Amaestramiento para nuestra comunidad de 18 pisos. Cada vecino con su llave individual y el presidente con la maestra. Sistema perfecto y muy bien explicado. Trabajo impecable."
  },
  {
    id: 24,
    name: "Alberto W.",
    rating: 5,
    date: "2025-08-24",
    service: "Apertura de puertas",
    location: "Zona Centro",
    text: "Llave rota en la cerradura un viernes por la noche. Pensé que tendría que esperar al lunes pero vinieron en media hora. Sacaron el trozo de llave y me abrieron. Salvaron mi fin de semana."
  },
  {
    id: 25,
    name: "Mónica K.",
    rating: 5,
    date: "2025-08-22",
    service: "Cambio de cerradura",
    location: "Los Negrillos",
    text: "Después de una separación necesitaba cambiar la cerradura urgente. Vinieron el mismo día y me pusieron una nueva con llaves de seguridad. Trato discreto y profesional. Muy agradecida."
  },
  {
    id: 26,
    name: "Fernando L.",
    rating: 5,
    date: "2025-08-20",
    service: "Cambio de bombín",
    location: "El Carralero",
    text: "Bombín viejo que se atascaba constantemente. Me recomendaron uno nuevo antibumping y antiganzúa. La diferencia es notable. Instalación rápida y precio justo. Muy contentos."
  },
  {
    id: 27,
    name: "Lucía E.",
    rating: 5,
    date: "2025-08-18",
    service: "Apertura de puertas",
    location: "Valle del Arcipreste",
    text: "Puerta bloqueada desde dentro por un problema con el mecanismo. Vinieron rápido y la abrieron sin romper nada. Además me arreglaron el mecanismo. Servicio completo y profesional."
  },
  {
    id: 28,
    name: "Óscar I.",
    rating: 5,
    date: "2025-08-15",
    service: "Cambio de cerradura",
    location: "Casco Antiguo",
    text: "Instalación de cerradura de seguridad Tesa en mi piso. El cerrajero me asesoró muy bien sobre cuál era la mejor opción para mi puerta. Trabajo limpio y rápido. Totalmente recomendable."
  },
  {
    id: 29,
    name: "Nuria Q.",
    rating: 5,
    date: "2025-08-12",
    service: "Apertura de puertas",
    location: "Gran Vía",
    text: "Me quedé encerrada en el baño y la cerradura no abría. Mi marido llamó y vinieron enseguida. Abrieron sin romper la puerta y arreglaron la cerradura. Muy profesionales y rápidos."
  },
  {
    id: 30,
    name: "Guillermo U.",
    rating: 5,
    date: "2025-08-10",
    service: "Amaestramiento",
    location: "Monte del Pilar",
    text: "Sistema de amaestramiento para mi local comercial con 3 empleados. Cada uno tiene su llave y yo tengo la maestra. Control total de accesos. Instalación perfecta y bien explicada."
  },
  {
    id: 31,
    name: "Verónica Y.",
    rating: 5,
    date: "2025-08-08",
    service: "Cambio de bombín",
    location: "Zona Centro",
    text: "Cambio de bombín después de perder las llaves en el supermercado. Me pusieron uno nuevo de alta seguridad en 20 minutos. Precio transparente y servicio excelente. Muy recomendable."
  },
  {
    id: 32,
    name: "Adrián Z.",
    rating: 5,
    date: "2025-08-05",
    service: "Apertura de puertas",
    location: "Los Negrillos",
    text: "Cerradura bloqueada después de intentar forzarla yo mismo. Error mío. El cerrajero vino, la abrió sin daños y me explicó por qué no debía haberlo intentado. Muy profesional y educado."
  },
  {
    id: 33,
    name: "Sandra X.",
    rating: 5,
    date: "2025-08-03",
    service: "Cambio de cerradura",
    location: "El Carralero",
    text: "Renovación completa de la cerradura de mi casa. Me instalaron una Mottura de última generación. La diferencia con la antigua es abismal. Trabajo perfecto y precio ajustado."
  },
  {
    id: 34,
    name: "Ignacio V.",
    rating: 5,
    date: "2025-08-01",
    service: "Apertura de puertas",
    location: "Valle del Arcipreste",
    text: "Llamé a las 3 de la madrugada porque me había quedado fuera. Llegaron en 22 minutos y abrieron sin problemas. El precio de noche (120€) me pareció justo por la urgencia y la hora."
  },
  {
    id: 35,
    name: "Alicia B.",
    rating: 5,
    date: "2025-07-29",
    service: "Cambio de bombín",
    location: "Casco Antiguo",
    text: "Bombín atascado que no giraba. Me lo cambiaron por uno nuevo Mul-T-Lock de máxima seguridad. Ahora la cerradura funciona suave y tengo llaves incopiables. Muy contentos."
  },
  {
    id: 36,
    name: "Marcos N.",
    rating: 5,
    date: "2025-07-26",
    service: "Amaestramiento",
    location: "Gran Vía",
    text: "Amaestramiento para edificio de 6 oficinas. Cada empresa con su llave y nosotros con la maestra para mantenimiento. Sistema perfecto, instalación rápida y precio razonable."
  },
  {
    id: 37,
    name: "Teresa M.",
    rating: 5,
    date: "2025-07-24",
    service: "Apertura de puertas",
    location: "Monte del Pilar",
    text: "Puerta atascada por la humedad. No abría ni con llave. El cerrajero la ajustó y me recomendó un tratamiento para la madera. Ahora funciona perfecta. Muy profesional."
  },
  {
    id: 38,
    name: "Rubén H.",
    rating: 5,
    date: "2025-07-22",
    service: "Cambio de cerradura",
    location: "Zona Centro",
    text: "Instalación de cerradura multipunto en mi piso. Me explicaron todas las ventajas de seguridad y el trabajo fue impecable. Ahora tengo 5 puntos de anclaje. Duermo más tranquilo."
  },
  {
    id: 39,
    name: "Pilar J.",
    rating: 5,
    date: "2025-07-20",
    service: "Cambio de bombín",
    location: "Los Negrillos",
    text: "Cambio de bombín urgente después de que unos okupas intentaran entrar en el piso de al lado. Me pusieron uno antibumping y antitaladro. Instalación rápida y precio correcto."
  },
  {
    id: 40,
    name: "Andrés F.",
    rating: 5,
    date: "2025-07-18",
    service: "Apertura de puertas",
    location: "El Carralero",
    text: "Me quedé fuera con las llaves dentro un sábado por la tarde. Llamé y llegaron en 25 minutos. Abrieron sin daños y me hicieron un duplicado de llaves. Servicio perfecto."
  },
  {
    id: 41,
    name: "Eva R.",
    rating: 5,
    date: "2025-07-15",
    service: "Cambio de cerradura",
    location: "Valle del Arcipreste",
    text: "Cambié la cerradura después de un intento de robo. Me instalaron una Ezcurra de alta seguridad con certificado. El cerrajero muy profesional y me explicó todo perfectamente."
  },
  {
    id: 42,
    name: "Daniel S.",
    rating: 5,
    date: "2025-07-12",
    service: "Apertura de puertas",
    location: "Casco Antiguo",
    text: "Llave partida en la cerradura a primera hora de la mañana. Llamé y vinieron antes de las 9. Sacaron el trozo de llave y me abrieron. Llegué al trabajo solo 20 minutos tarde. Gracias."
  },
  {
    id: 43,
    name: "Natalia G.",
    rating: 5,
    date: "2025-07-10",
    service: "Amaestramiento",
    location: "Gran Vía",
    text: "Sistema de amaestramiento para nuestra comunidad. Ahora cada vecino tiene su llave y el presidente la maestra para zonas comunes. El cerrajero nos explicó todo muy bien. Perfecto."
  },
  {
    id: 44,
    name: "Jorge P.",
    rating: 5,
    date: "2025-07-08",
    service: "Cambio de bombín",
    location: "Monte del Pilar",
    text: "Bombín viejo que daba problemas. Me recomendaron cambiarlo por uno moderno antibumping. La instalación fue rápida y ahora funciona perfecto. Precio justo y buen servicio."
  },
  {
    id: 45,
    name: "Raquel L.",
    rating: 5,
    date: "2025-07-05",
    service: "Apertura de puertas",
    location: "Zona Centro",
    text: "Cerradura bloqueada un domingo por la mañana. Llamé y llegaron en media hora. Abrieron sin problemas y me arreglaron el mecanismo. Servicio de urgencia perfecto."
  },
  {
    id: 46,
    name: "Víctor A.",
    rating: 5,
    date: "2025-07-03",
    service: "Cambio de cerradura",
    location: "Los Negrillos",
    text: "Instalación de cerradura de seguridad Tesa. El cerrajero me asesoró sobre el mejor modelo para mi puerta blindada. Trabajo limpio y profesional. Muy recomendable."
  },
  {
    id: 47,
    name: "Lorena C.",
    rating: 5,
    date: "2025-07-01",
    service: "Apertura de puertas",
    location: "El Carralero",
    text: "Mi hijo de 3 años cerró la puerta con el pestillo desde dentro. Pánico total. El cerrajero llegó en 15 minutos y abrió sin asustar al niño. Profesionalidad y calma. Gracias."
  },
  {
    id: 48,
    name: "Héctor D.",
    rating: 5,
    date: "2025-06-28",
    service: "Cambio de bombín",
    location: "Valle del Arcipreste",
    text: "Cambio de bombín después de perder las llaves. Me pusieron uno de alta seguridad con llaves incopiables. Instalación en 15 minutos. Precio transparente y servicio excelente."
  },
  {
    id: 49,
    name: "Irene O.",
    rating: 5,
    date: "2025-06-25",
    service: "Amaestramiento",
    location: "Casco Antiguo",
    text: "Amaestramiento para nuestro edificio de 12 viviendas. Sistema perfecto para controlar accesos. El cerrajero muy profesional y el trabajo impecable. Muy contentos con el resultado."
  },
  {
    id: 50,
    name: "Pablo E.",
    rating: 5,
    date: "2025-06-23",
    service: "Apertura de puertas",
    location: "Gran Vía",
    text: "Puerta atascada después de pintar el marco. No abría ni con llave. Vinieron rápido, la ajustaron y me dieron consejos para evitarlo en el futuro. Muy profesionales."
  },
  {
    id: 51,
    name: "Sonia I.",
    rating: 5,
    date: "2025-06-20",
    service: "Cambio de cerradura",
    location: "Monte del Pilar",
    text: "Cambié la cerradura vieja por una moderna multipunto. La diferencia de seguridad es enorme. El cerrajero muy profesional y el precio muy razonable. Totalmente recomendable."
  },
  {
    id: 52,
    name: "Emilio U.",
    rating: 5,
    date: "2025-06-18",
    service: "Cambio de bombín",
    location: "Zona Centro",
    text: "Bombín atascado que no giraba bien. Me lo cambiaron por uno nuevo antibumping. Ahora la cerradura funciona suave y tengo más seguridad. Muy buen servicio."
  },
  {
    id: 53,
    name: "Amparo Y.",
    rating: 5,
    date: "2025-06-15",
    service: "Apertura de puertas",
    location: "Los Negrillos",
    text: "Me quedé fuera a las 10 de la noche. Llamé y llegaron en 20 minutos. Abrieron sin daños y el precio fue el que me dijeron por teléfono (90€). Servicio perfecto."
  },
  {
    id: 54,
    name: "Gonzalo Z.",
    rating: 5,
    date: "2025-06-12",
    service: "Cambio de cerradura",
    location: "El Carralero",
    text: "Instalación de cerradura Mottura de alta seguridad. El cerrajero me explicó todas las características y el trabajo fue impecable. Ahora mi casa está mucho más segura."
  },
  {
    id: 55,
    name: "Dolores X.",
    rating: 5,
    date: "2025-06-10",
    service: "Apertura de puertas",
    location: "Valle del Arcipreste",
    text: "Llave rota dentro de la cerradura. El cerrajero la sacó sin problemas y me hizo llaves nuevas en el momento. Todo resuelto en 30 minutos. Muy profesional."
  },
  {
    id: 56,
    name: "Iván V.",
    rating: 5,
    date: "2025-06-08",
    service: "Amaestramiento",
    location: "Casco Antiguo",
    text: "Sistema de amaestramiento para mi empresa con 5 empleados. Cada uno con su llave y yo con la maestra. Control perfecto de accesos. Instalación rápida y bien explicada."
  },
  {
    id: 57,
    name: "Montserrat B.",
    rating: 5,
    date: "2025-06-05",
    service: "Cambio de bombín",
    location: "Gran Vía",
    text: "Cambio de bombín urgente después de perder las llaves. Vinieron el mismo día y me pusieron uno de alta seguridad. Precio justo y servicio excelente. Muy recomendable."
  },
  {
    id: 58,
    name: "Ángel N.",
    rating: 5,
    date: "2025-06-03",
    service: "Apertura de puertas",
    location: "Monte del Pilar",
    text: "Cerradura bloqueada a las 6 de la mañana. Llamé y llegaron antes de las 7. Abrieron rápido y me arreglaron el mecanismo. Pude ir a trabajar sin problemas. Gracias."
  },
  {
    id: 59,
    name: "Encarna M.",
    rating: 5,
    date: "2025-06-01",
    service: "Cambio de cerradura",
    location: "Zona Centro",
    text: "Instalación de cerradura de seguridad Ezcurra. El cerrajero muy profesional, me asesoró bien y el trabajo quedó perfecto. Precio transparente y servicio excelente."
  },
  {
    id: 60,
    name: "Ramón H.",
    rating: 5,
    date: "2025-05-29",
    service: "Cambio de bombín",
    location: "Los Negrillos",
    text: "Bombín viejo que se atascaba. Me recomendaron uno nuevo antibumping y antiganzúa. La instalación fue rápida y ahora funciona perfecto. Muy contentos con el servicio."
  },
  {
    id: 61,
    name: "Remedios J.",
    rating: 5,
    date: "2025-05-26",
    service: "Apertura de puertas",
    location: "El Carralero",
    text: "Puerta atascada por un problema con las bisagras. El cerrajero la ajustó y me explicó cómo mantenerla. Ahora funciona perfecta. Muy profesional y educado."
  },
  {
    id: 62,
    name: "Tomás F.",
    rating: 5,
    date: "2025-05-24",
    service: "Amaestramiento",
    location: "Valle del Arcipreste",
    text: "Amaestramiento para nuestra comunidad de 20 viviendas. Sistema perfecto, cada vecino con su llave y el presidente con la maestra. Trabajo impecable y bien explicado."
  },
  {
    id: 63,
    name: "Consuelo R.",
    rating: 5,
    date: "2025-05-22",
    service: "Apertura de puertas",
    location: "Casco Antiguo",
    text: "Me quedé fuera con mi perro dentro un viernes por la noche. Llegaron en 18 minutos y abrieron sin problemas. El perro estaba bien. Muy agradecida por la rapidez."
  },
  {
    id: 64,
    name: "Esteban S.",
    rating: 5,
    date: "2025-05-20",
    service: "Cambio de cerradura",
    location: "Gran Vía",
    text: "Cambié la cerradura después de una mudanza. Me instalaron una Tesa de alta seguridad. El cerrajero muy profesional y el trabajo perfecto. Precio muy razonable."
  },
  {
    id: 65,
    name: "Josefa G.",
    rating: 5,
    date: "2025-05-18",
    service: "Cambio de bombín",
    location: "Monte del Pilar",
    text: "Bombín atascado que no giraba. Me lo cambiaron por uno nuevo de alta seguridad en 20 minutos. Ahora funciona suave y tengo llaves incopiables. Excelente servicio."
  },
  {
    id: 66,
    name: "Agustín P.",
    rating: 5,
    date: "2025-05-15",
    service: "Apertura de puertas",
    location: "Zona Centro",
    text: "Llave partida en la cerradura un domingo. Pensé que tendría que esperar al lunes pero vinieron en media hora. Sacaron la llave y me abrieron. Salvaron mi domingo."
  },
  {
    id: 67,
    name: "Purificación L.",
    rating: 5,
    date: "2025-05-12",
    service: "Cambio de cerradura",
    location: "Los Negrillos",
    text: "Instalación de cerradura multipunto Mottura. El cerrajero me explicó todas las ventajas y el trabajo fue impecable. Ahora mi casa tiene seguridad de verdad."
  },
  {
    id: 68,
    name: "Jesús A.",
    rating: 5,
    date: "2025-05-10",
    service: "Apertura de puertas",
    location: "El Carralero",
    text: "Cerradura bloqueada después de intentar abrirla con una llave equivocada. El cerrajero vino rápido, la abrió sin daños y me explicó el problema. Muy profesional."
  },
  {
    id: 69,
    name: "Milagros C.",
    rating: 5,
    date: "2025-05-08",
    service: "Amaestramiento",
    location: "Valle del Arcipreste",
    text: "Sistema de amaestramiento para edificio de oficinas. Perfecto para controlar accesos de empleados y limpieza. El cerrajero muy profesional y el sistema funciona de maravilla."
  },
  {
    id: 70,
    name: "Salvador D.",
    rating: 5,
    date: "2025-05-05",
    service: "Cambio de bombín",
    location: "Casco Antiguo",
    text: "Cambio de bombín después de perder las llaves en el metro. Me pusieron uno antibumping en 15 minutos. Precio transparente y servicio rápido. Muy recomendable."
  },
  {
    id: 71,
    name: "Rosario O.",
    rating: 5,
    date: "2025-05-03",
    service: "Apertura de puertas",
    location: "Gran Vía",
    text: "Puerta atascada por la humedad. No abría ni con llave. El cerrajero la ajustó y me dio consejos de mantenimiento. Ahora funciona perfecta. Muy profesional."
  },
  {
    id: 72,
    name: "Julián E.",
    rating: 5,
    date: "2025-05-01",
    service: "Cambio de cerradura",
    location: "Monte del Pilar",
    text: "Instalación de cerradura Ezcurra de alta seguridad. El trabajo fue rápido y limpio. El cerrajero me explicó cómo funcionaba y me dio consejos de uso. Excelente servicio."
  },
  {
    id: 73,
    name: "Ascensión I.",
    rating: 5,
    date: "2025-04-28",
    service: "Cambio de bombín",
    location: "Zona Centro",
    text: "Bombín viejo que daba problemas. Me recomendaron uno nuevo Mul-T-Lock. La diferencia es notable. Instalación rápida y precio justo. Muy contentos."
  },
  {
    id: 74,
    name: "Bernardo U.",
    rating: 5,
    date: "2025-04-25",
    service: "Apertura de puertas",
    location: "Los Negrillos",
    text: "Me quedé fuera a las 11 de la noche después de sacar la basura. Llamé y llegaron en 22 minutos. Abrieron sin problemas. Precio correcto (90€). Muy profesionales."
  },
  {
    id: 75,
    name: "Visitación Y.",
    rating: 5,
    date: "2025-04-23",
    service: "Amaestramiento",
    location: "El Carralero",
    text: "Amaestramiento para nuestra comunidad. Sistema perfecto, cada vecino con su llave y el presidente con la maestra para zonas comunes. Instalación impecable."
  },
  {
    id: 76,
    name: "Claudio Z.",
    rating: 5,
    date: "2025-04-20",
    service: "Cambio de cerradura",
    location: "Valle del Arcipreste",
    text: "Cambié la cerradura después de un intento de robo. Me instalaron una Mottura de máxima seguridad. El cerrajero muy profesional y el trabajo perfecto. Duermo tranquilo."
  },
  {
    id: 77,
    name: "Inmaculada X.",
    rating: 5,
    date: "2025-04-18",
    service: "Apertura de puertas",
    location: "Casco Antiguo",
    text: "Llave rota en la cerradura a primera hora. Llamé y vinieron antes de las 8. Sacaron el trozo de llave y me abrieron. Llegué al trabajo a tiempo. Gracias."
  },
  {
    id: 78,
    name: "Leandro V.",
    rating: 5,
    date: "2025-04-15",
    service: "Cambio de bombín",
    location: "Gran Vía",
    text: "Cambio de bombín urgente. Me pusieron uno antibumping de alta seguridad. Instalación en 20 minutos. Precio justo y servicio excelente. Totalmente recomendable."
  },
  {
    id: 79,
    name: "Angustias B.",
    rating: 5,
    date: "2025-04-12",
    service: "Apertura de puertas",
    location: "Monte del Pilar",
    text: "Cerradura bloqueada un sábado por la tarde. Llamé y llegaron en 25 minutos. Abrieron sin daños y me arreglaron el mecanismo. Servicio perfecto."
  },
  {
    id: 80,
    name: "Modesto N.",
    rating: 5,
    date: "2025-04-10",
    service: "Cambio de cerradura",
    location: "Zona Centro",
    text: "Instalación de cerradura multipunto Tesa. El cerrajero me asesoró perfectamente y el trabajo fue impecable. Ahora tengo seguridad de verdad en mi casa."
  },
  {
    id: 81,
    name: "Virtudes M.",
    rating: 5,
    date: "2025-04-08",
    service: "Cambio de bombín",
    location: "Los Negrillos",
    text: "Bombín atascado que no giraba bien. Me lo cambiaron por uno nuevo de alta seguridad. Ahora funciona perfecto. Instalación rápida y precio razonable."
  },
  {
    id: 82,
    name: "Plácido H.",
    rating: 5,
    date: "2025-04-05",
    service: "Amaestramiento",
    location: "El Carralero",
    text: "Sistema de amaestramiento para mi local con 4 empleados. Cada uno con su llave y yo con la maestra. Control perfecto. El cerrajero muy profesional."
  },
  {
    id: 83,
    name: "Casilda J.",
    rating: 5,
    date: "2025-04-03",
    service: "Apertura de puertas",
    location: "Valle del Arcipreste",
    text: "Puerta atascada después de pintar. No abría ni con llave. Vinieron rápido, la ajustaron y me dieron consejos. Ahora funciona perfecta. Muy profesionales."
  },
  {
    id: 84,
    name: "Eusebio F.",
    rating: 5,
    date: "2025-04-01",
    service: "Cambio de cerradura",
    location: "Casco Antiguo",
    text: "Cambié la cerradura vieja por una moderna Ezcurra. La diferencia es enorme. El cerrajero muy profesional y el precio muy razonable. Totalmente recomendable."
  },
  {
    id: 85,
    name: "Genoveva R.",
    rating: 5,
    date: "2025-03-29",
    service: "Cambio de bombín",
    location: "Gran Vía",
    text: "Cambio de bombín después de perder las llaves. Me pusieron uno antibumping con llaves incopiables. Instalación rápida y precio justo. Muy buen servicio."
  },
  {
    id: 86,
    name: "Blas S.",
    rating: 5,
    date: "2025-03-26",
    service: "Apertura de puertas",
    location: "Monte del Pilar",
    text: "Me quedé fuera un domingo por la mañana. Llamé y llegaron en media hora. Abrieron sin problemas y el precio fue correcto. Servicio de urgencia perfecto."
  },
  {
    id: 87,
    name: "Felicidad G.",
    rating: 5,
    date: "2025-03-24",
    service: "Cambio de cerradura",
    location: "Zona Centro",
    text: "Instalación de cerradura Mottura de alta seguridad. El cerrajero me explicó todas las características y el trabajo fue perfecto. Muy profesional y educado."
  },
  {
    id: 88,
    name: "Ceferino P.",
    rating: 5,
    date: "2025-03-22",
    service: "Apertura de puertas",
    location: "Los Negrillos",
    text: "Llave partida dentro de la cerradura. El cerrajero la sacó sin problemas y me hizo llaves nuevas. Todo resuelto en 40 minutos. Muy profesional."
  },
  {
    id: 89,
    name: "Adoración L.",
    rating: 5,
    date: "2025-03-20",
    service: "Amaestramiento",
    location: "El Carralero",
    text: "Amaestramiento para nuestra comunidad de 16 viviendas. Sistema perfecto y muy bien explicado. El cerrajero muy profesional y el trabajo impecable."
  },
  {
    id: 90,
    name: "Faustino A.",
    rating: 5,
    date: "2025-03-18",
    service: "Cambio de bombín",
    location: "Valle del Arcipreste",
    text: "Bombín viejo que se atascaba constantemente. Me recomendaron uno nuevo antibumping. La instalación fue rápida y ahora funciona perfecto. Muy contentos."
  },
  {
    id: 91,
    name: "Perpetua C.",
    rating: 5,
    date: "2025-03-15",
    service: "Apertura de puertas",
    location: "Casco Antiguo",
    text: "Cerradura bloqueada a las 10 de la noche. Llamé y llegaron en 20 minutos. Abrieron sin daños. Precio justo (90€) y servicio excelente. Muy recomendable."
  },
  {
    id: 92,
    name: "Demetrio D.",
    rating: 5,
    date: "2025-03-12",
    service: "Cambio de cerradura",
    location: "Gran Vía",
    text: "Instalación de cerradura de seguridad Tesa. El trabajo fue rápido y limpio. El cerrajero muy profesional y el precio transparente. Totalmente recomendable."
  },
  {
    id: 93,
    name: "Araceli O.",
    rating: 5,
    date: "2025-03-10",
    service: "Cambio de bombín",
    location: "Monte del Pilar",
    text: "Cambio de bombín urgente después de perder las llaves en el parque. Vinieron el mismo día y me pusieron uno de alta seguridad. Servicio rápido y eficiente."
  },
  {
    id: 94,
    name: "Hilario E.",
    rating: 5,
    date: "2025-03-08",
    service: "Apertura de puertas",
    location: "Zona Centro",
    text: "Puerta atascada por un problema con el marco. El cerrajero la ajustó y me explicó cómo evitarlo. Ahora funciona perfecta. Muy profesional y educado."
  },
  {
    id: 95,
    name: "Primitiva I.",
    rating: 5,
    date: "2025-03-05",
    service: "Amaestramiento",
    location: "Los Negrillos",
    text: "Sistema de amaestramiento para edificio de 10 oficinas. Perfecto para controlar accesos. El cerrajero muy profesional y el sistema funciona de maravilla."
  },
  {
    id: 96,
    name: "Saturnino U.",
    rating: 5,
    date: "2025-03-03",
    service: "Cambio de cerradura",
    location: "El Carralero",
    text: "Cambié la cerradura después de una separación. Me instalaron una Ezcurra nueva con llaves de seguridad. Trato discreto y profesional. Muy agradecido."
  },
  {
    id: 97,
    name: "Filomena Y.",
    rating: 5,
    date: "2025-03-01",
    service: "Apertura de puertas",
    location: "Valle del Arcipreste",
    text: "Me quedé fuera con mi gato dentro. Llamé preocupada y llegaron en 18 minutos. Abrieron rápido y el gato estaba bien. Muy agradecida por la rapidez y profesionalidad."
  }
];

