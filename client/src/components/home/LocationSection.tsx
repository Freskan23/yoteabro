
import { MapPin, Phone, Clock } from "lucide-react";
import { APP_PHONE_DISPLAY, APP_ADDRESS } from "@/const";

export default function LocationSection() {
    return (
        <section id="ubicacion" className="py-20 bg-white overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold text-[#001529] mb-4">
                                ¿Dónde estamos? <span className="text-[#FF6B35]">Visítanos</span>
                            </h2>
                            <p className="text-xl text-gray-600">
                                Estamos en el corazón de Leganés, dentro de la emblemática Galería Sanabria. Ven a vernos para duplicado de llaves o asesoramiento en seguridad.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:scale-[1.02] group">
                                <div className="bg-[#FF6B35]/10 p-3 rounded-xl group-hover:bg-[#FF6B35] transition-colors">
                                    <MapPin className="h-6 w-6 text-[#FF6B35] group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Dirección</h3>
                                    <p className="text-gray-600">{APP_ADDRESS}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:scale-[1.02] group">
                                <div className="bg-[#004E89]/10 p-3 rounded-xl group-hover:bg-[#004E89] transition-colors">
                                    <Phone className="h-6 w-6 text-[#004E89] group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Teléfono de contacto</h3>
                                    <p className="text-gray-600">{APP_PHONE_DISPLAY}</p>
                                    <p className="text-xs text-[#E55A2B] font-bold uppercase mt-1">Atención 24 Horas</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:scale-[1.02] group">
                                <div className="bg-[#FF6B35]/10 p-3 rounded-xl group-hover:bg-[#FF6B35] transition-colors">
                                    <Clock className="h-6 w-6 text-[#FF6B35] group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Horario de Taller</h3>
                                    <p className="text-gray-600">Lunes a Viernes: 9:30 - 14:00 y 17:00 - 20:00</p>
                                    <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-[#004E89]/5 rounded-[2.5rem] transform -rotate-2"></div>
                        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.4102923583685!2d-3.765664323445839!3d40.32213196140683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189874cb306a7%3A0x673c68383e2da02e!2sAv.%20de%20Fuenlabrada%2C%2037%2C%2028912%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1705326500000!5m2!1ses!2ses"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de Cerrajería Aguado en Leganés"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
