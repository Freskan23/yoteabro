import random
import json
from datetime import datetime, timedelta

neighborhoods = [
    "Zarzaquemada", "San Nicasio", "El Carrascal", "Leganés Norte", 
    "Arroyo Culebro", "La Fortuna", "Valdepelayo", "Vereda de los Estudiantes", 
    "Solagua", "Poza del Agua", "Los Santos", "Centro"
]

services = [
    "Apertura de Puertas", "Cambio de Cerradura", "Cambio de Bombín", 
    "Amaestramiento", "Urgencias 24h"
]

names = [
    "María", "Carlos", "Elena", "Javier", "Patricia", "Ricardo", "Ana", "Miguel Á.", 
    "Sofía", "Andrés", "Laura", "Fernando", "Lucía", "Sergio", "Isabel", "David", 
    "Carmen", "Antonio", "Beatriz", "Raúl", "Marta", "Pedro", "Silvia", "Jorge", 
    "Natalia", "Roberto", "Cristina", "Alberto", "Mónica", "Fernando", "Nuria", 
    "Guillermo", "Verónica", "Adrián", "Sandra", "Ignacio", "Alicia", "Marcos", 
    "Teresa", "Rubén", "Pilar", "Andrés", "Eva", "Daniel", "Lorena", "Héctor", 
    "Irene", "Pablo", "Sonia", "Emilio", "Amparo", "Gonzalo", "Dolores", "Iván"
]

last_names = ["G.", "M.", "R.", "S.", "L.", "V.", "B.", "T.", "K.", "F.", "D.", "P.", "O.", "C.", "T.", "H.", "N.", "A.", "E.", "Q.", "U.", "Y.", "Z.", "X.", "W."]

texts_apertura = [
    "Me quedé fuera de casa y llegaron rapidísimo a {loc}. Muy profesionales.",
    "Abrieron la puerta de mi piso en {loc} sin romper nada. El precio fue de 90€ como acordamos.",
    "Servicio de apertura impecable. El cerrajero fue muy amable y eficaz en {loc}.",
    "Perdí las llaves en {loc} y en 20 minutos estaba dentro. Increíble rapidez.",
    "Excelente trato y rapidez para abrir mi puerta acorazada en {loc}.",
    "Muy satisfecho con la apertura en {loc}. No dañaron el marco y fueron muy puntuales.",
    "Llamé por una urgencia en {loc} y la solución fue inmediata. Recomendados."
]

texts_cerradura = [
    "Cambié la cerradura de mi casa en {loc} por seguridad. Trabajo muy limpio.",
    "Instalación de cerradura multipunto de alta calidad en {loc}. Muy conforme.",
    "Me asesoraron genial sobre qué cerradura poner en mi negocio de {loc}.",
    "Profesionales serios en {loc}. La cerradura nueva funciona de maravilla.",
    "Rapidez y buen precio para cambiar la cerradura después de la mudanza a {loc}.",
    "Instaladores expertos de Aguado. Todo quedó perfecto en {loc}.",
    "Muy buen servicio de cambio de cerradura en {loc}. Repetiría sin dudar."
]

texts_bombin = [
    "Puse un bombín antibumping en {loc} y ahora duermo más tranquilo.",
    "Cambiaron el bombín viejo por uno de alta seguridad en un momento en {loc}.",
    "Muy buena atención. El bombín nuevo va suavísimo. Gracias!",
    "Servicio rápido para actualizar el bombín en mi piso de {loc}.",
    "Calidad y precio justo en el cambio de bombín de seguridad en {loc}.",
    "El técnico me explicó las ventajas del nuevo bombín en {loc}. Muy profesional.",
    "Instalación impecable de bombín protector en {loc}. Muy recomendables."
]

texts_amaestramiento = [
    "Hicimos el amaestramiento para la comunidad en {loc} y ha sido un acierto.",
    "Ahora uso una sola llave para todo en mi local de {loc}. Genial!",
    "El sistema de amaestramiento funciona perfecto en {loc}. Muy cómodo.",
    "Gran ahorro de llaves gracias al servicio de amaestramiento en {loc}.",
    "Profesionales del amaestramiento. Todo bien organizado en {loc}.",
    "Muy útil para el control de accesos en nuestra oficina de {loc}.",
    "Servicio de 10 para amaestrar las llaves de mi vivienda en {loc}."
]

texts_urgencias = [
    "Vinieron un domingo de madrugada a {loc}. Salvaron mi noche por 120€.",
    "Urgencia resuelta en tiempo récord. El cerrajero llegó en 15 min a {loc}.",
    "Servicio 24h real en Leganés. Muy agradecida por la asistencia en {loc}.",
    "Se me partió la llave de noche en {loc} y vinieron volando a ayudarme.",
    "Precio de urgencia honesto por el servicio prestado en {loc}.",
    "Atención excelente para una urgencia nocturna en {loc}.",
    "Los mejores cerrajeros de urgencia en {loc}. Rápidos y muy eficaces."
]

header = """export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  date: string;
  service: string;
  location: string;
  text: string;
}

"""

def generate_testimonials(count):
    res = []
    base_date = datetime(2026, 1, 15)
    for i in range(1, count + 1):
        name = random.choice(names) + " " + random.choice(last_names)
        loc = random.choice(neighborhoods)
        service = random.choice(services)
        days_ago = random.randint(0, 365)
        date = (base_date - timedelta(days=days_ago)).strftime("%Y-%m-%d")
        
        if service == "Apertura de Puertas":
            text = random.choice(texts_apertura).format(loc=loc)
        elif service == "Cambio de Cerradura":
            text = random.choice(texts_cerradura).format(loc=loc)
        elif service == "Cambio de Bombín":
            text = random.choice(texts_bombin).format(loc=loc)
        elif service == "Amaestramiento":
            text = random.choice(texts_amaestramiento).format(loc=loc)
        else: # Urgencias 24h
            text = random.choice(texts_urgencias).format(loc=loc)
            
        res.append({
            "id": i,
            "name": name,
            "rating": 5,
            "date": date,
            "service": service,
            "location": loc,
            "text": text
        })
    return res

data = generate_testimonials(97)
print(header)
print("export const testimonials: Testimonial[] = " + json.dumps(data, indent=2, ensure_ascii=False) + ";")
