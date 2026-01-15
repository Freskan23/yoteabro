import random
import json
import os
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

names = ["Maite", "Charly", "Elena", "Javi", "Patri", "Richi", "Ani", "Miguel", "Sofi", "Andrés", "Lauri", "Fer", "Lucía", "Sergi", "Isa", "Dani", "Carmen", "Toñi", "Bea", "Raulito", "Marta", "Perico", "Silvia", "Jorgito", "Nati", "Rober", "Cris", "Alber", "Moni", "Nuria", "Guille", "Vero", "Adri", "Sandra", "Nacho", "Ali", "Marquitos", "Tere", "Rubén", "Pilar", "Eva", "Dani", "Lore", "Héctor", "Irene", "Pablito", "Sonia", "Emilio", "Amparo", "Gonzalo", "Loli", "Iván"]
last_names = ["G.", "M.", "R.", "S.", "L.", "V.", "B.", "T.", "Z.", "F.", "D.", "P.", "O.", "C.", "H.", "N.", "A.", "E.", "Q."]

# Human-style templates with local slang and varied structures
templates = {
    "Apertura de Puertas": [
        "Me dejé las llaves puestas por dentro y el chaval llegó en nada a {loc}. Super majo y sin romper nada. Mano de santo!",
        "Rápido no, lo siguiente. Me abrieron el piso en {loc} en 10 minutos. Ni un rasguño a la puerta.",
        "Estaba desesperada y me ayudaron un montón. Precio justo y trato excelente en {loc}.",
        "Servicio técnico impecable. Abrir la puerta fue un visto y no visto. Recomendables 100%.",
        "Llegó el cerrajero a {loc} a los 20 min de llamar. Muy profesional y educado.",
        "Perdí las llaves y me salvaron el día. Entré en casa sin problemas.",
        "Súper eficaces. Me abrieron la puerta acorazada en {loc} sin liarla."
    ],
    "Cambio de Cerradura": [
        "He cambiado la cerradura del local en {loc} y todo perfecto. Limpios y rápidos.",
        "Me instalaron una cerradura de las buenas, multipunto. Ahora sí que se duerme tranquilo.",
        "Buen presupuesto y mejor trabajo. Los instaladores de {loc} son unos máquinas.",
        "Cerradura nueva puesta en el día. Sin historias ni líos. Muy bien.",
        "Si buscas un cerrajero en {loc} que no te engañe, llama a estos. Buen trabajo.",
        "Todo según lo previsto. Profesionales de verdad.",
        "Mejoraron mucho la seguridad de mi casa en {loc}. Muy contenta."
    ],
    "Cambio de Bombín": [
        "Puse el bombín antibumping que me dijeron y va de lujo. Suave, suave.",
        "Me cambiaron el bombín viejo en un momento en {loc}. Calidad y buen precio.",
        "Muy recomendables para actualizar la seguridad. Saben lo que hacen.",
        "Bombín de alta seguridad instalado hoy mismo. Rapidez total.",
        "El técnico me explicó todo súper bien en mi casa de {loc}. Da gusto.",
        "Cero complicaciones para el cambio de bombín. Súper serios.",
        "Material de primera. Se nota que no te ponen cualquier cosa."
    ],
    "Amaestramiento": [
        "Lo de tener una sola llave para todo en la comunidad de {loc} es un inventazo. Gran trabajo.",
        "Amaestramos las llaves del chalet y qué comodidad. Muy bien hecho.",
        "Un ahorro de llaves brutal. Funciona todo a la primera.",
        "Súper organizados para el tema del amaestramiento en {loc}. Profesionales.",
        "Servicio muy pro. Todo quedó perfecto y el trato de 10.",
        "Se nota la experiencia. El sistema de llaves va genial.",
        "Muy útiles los consejos que nos dieron para el amaestramiento."
    ],
    "Urgencias 24h": [
        "A las 3 de la mañana y vinieron volando a {loc}. Gracias de corazón.",
        "Se me partió la llave de noche y en media hora estaba resuelto. Eficaces a tope.",
        "Urgencia real en Leganés. Me salvaron la noche y el precio fue correcto.",
        "Rápidos es poco. En {loc} no hay otros igual de urgencias.",
        "Atención telefónica de 10 y el cerrajero muy apañado. Rapidez máxima.",
        "No sabía a quién llamar y un acierto total. Súper rápidos.",
        "Un domingo por la tarde y vinieron enseguida. Muy agradecido."
    ]
}

def generate_humanized(total_count):
    res = []
    id_counter = 1
    base_date = datetime(2026, 1, 15)
    
    # 1. Total coverage (ensuring at least one per combo)
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
                "text": random.choice(templates[service]).format(loc=loc)
            })
            id_counter += 1
            
    # 2. Random fillers with varied structures
    while len(res) < total_count:
        loc = random.choice(neighborhoods)
        service = random.choice(services)
        name = random.choice(names) + " " + random.choice(last_names)
        days_ago = random.randint(0, 400)
        date = (base_date - timedelta(days=days_ago)).strftime("%Y-%m-%d")
        
        text = random.choice(templates[service]).format(loc=loc)
        # Randomly vary text length or add personality
        if random.random() > 0.7:
            text += " Saludos!"
        elif random.random() > 0.8:
            text = text.replace(".", "!!")
            
        res.append({
            "id": id_counter,
            "name": name,
            "rating": 5,
            "date": date,
            "service": service,
            "location": loc,
            "text": text
        })
        id_counter += 1
        
    random.shuffle(res) # Mix them up
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

data = generate_humanized(97)
output_path = os.path.join("client", "src", "data", "testimonials.ts")

with open(output_path, "w", encoding="utf-8") as f:
    f.write(header)
    f.write("export const testimonials: Testimonial[] = " + json.dumps(data, indent=2, ensure_ascii=False) + ";")

print(f"Humanized {len(data)} testimonials generated in UTF-8.")
