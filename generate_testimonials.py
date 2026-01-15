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

names = ["María", "Carlos", "Elena", "Javier", "Patricia", "Ricardo", "Ana", "Miguel Á.", "Sofía", "Andrés", "Laura", "Fernando", "Lucía", "Sergio", "Isabel", "David", "Carmen", "Antonio", "Beatriz", "Raúl", "Marta", "Pedro", "Silvia", "Jorge", "Natalia", "Roberto", "Cristina", "Alberto", "Mónica", "Nuria", "Guillermo", "Verónica", "Adrián", "Sandra", "Ignacio", "Alicia", "Marcos", "Teresa", "Rubén", "Pilar", "Eva", "Daniel", "Lorena", "Héctor", "Irene", "Pablo", "Sonia", "Emilio", "Amparo", "Gonzalo", "Dolores", "Iván"]
last_names = ["G.", "M.", "R.", "S.", "L.", "V.", "B.", "T.", "K.", "F.", "D.", "P.", "O.", "C.", "T.", "H.", "N.", "A.", "E.", "Q.", "U.", "Y.", "Z.", "X.", "W."]

texts = {
    "Apertura de Puertas": "Me quedé fuera de mi casa en {loc} y llegaron en 15 minutos. Abrieron sin romper nada. Trato de 10.",
    "Cambio de Cerradura": "Cambié la cerradura en {loc} por una de seguridad. Muy profesionales y limpios trabajando.",
    "Cambio de Bombín": "Instalaron un bombín antibumping en {loc}. Ahora me siento mucho más seguro. Gran servicio.",
    "Amaestramiento": "Servicio de amaestramiento impecable en {loc}. Muy cómodo tener una sola llave para todo.",
    "Urgencias 24h": "Urgencia resuelta a las 2 am en {loc}. Rapidez increíble y precio muy justo."
}

def generate_full_coverage(total_count):
    res = []
    id_counter = 1
    base_date = datetime(2026, 1, 15)
    
    # 1. Ensure EVERY combination is covered (12 * 5 = 60 reviews)
    for loc in neighborhoods:
        for service in services:
            name = random.choice(names) + " " + random.choice(last_names)
            days_ago = random.randint(0, 300)
            date = (base_date - timedelta(days=days_ago)).strftime("%Y-%m-%d")
            res.append({
                "id": id_counter,
                "name": name,
                "rating": 5,
                "date": date,
                "service": service,
                "location": loc,
                "text": texts[service].format(loc=loc)
            })
            id_counter += 1
            
    # 2. Fill the remaining up to total_count (97 - 60 = 37 reviews)
    while len(res) < total_count:
        loc = random.choice(neighborhoods)
        service = random.choice(services)
        name = random.choice(names) + " " + random.choice(last_names)
        days_ago = random.randint(0, 365)
        date = (base_date - timedelta(days=days_ago)).strftime("%Y-%m-%d")
        res.append({
            "id": id_counter,
            "name": name,
            "rating": 5,
            "date": date,
            "service": service,
            "location": loc,
            "text": texts[service].format(loc=loc) + " Altamente recomendados."
        })
        id_counter += 1
        
    return res

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

data = generate_full_coverage(97)
print(header)
print("export const testimonials: Testimonial[] = " + json.dumps(data, indent=2, ensure_ascii=False) + ";")
