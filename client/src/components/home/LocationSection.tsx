
import { MapPin, Phone, Clock } from "lucide-react";
import { APP_PHONE_DISPLAY, APP_ADDRESS } from "@/const";

export default function LocationSection() {
    return (
        <section id="ubicacion" className="py-20 bg-white overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-black text-[#293241] mb-4 uppercase italic tracking-tighter">
                                ¿Dónde estamos? <span className="text-[#EE6C4D]">Visítanos</span>
                            </h2>
                            <p className="text-xl text-gray-600">
                                Estamos en el corazón de Chamartín, preparados para cualquier urgencia o necesidad de cerrajería. Nuestros técnicos se desplazan rápidamente a cualquier punto del distrito.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:scale-[1.02] group">
                                <div className="bg-[#EE6C4D]/10 p-3 rounded-xl group-hover:bg-[#EE6C4D] transition-colors">
                                    <MapPin className="h-6 w-6 text-[#EE6C4D] group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-black text-[#293241] text-lg uppercase italic tracking-tighter">Dirección</h3>
                                    <p className="text-gray-600 font-medium">{APP_ADDRESS}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:scale-[1.02] group">
                                <div className="bg-[#3D5A80]/10 p-3 rounded-xl group-hover:bg-[#3D5A80] transition-colors">
                                    <Phone className="h-6 w-6 text-[#3D5A80] group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-black text-[#293241] text-lg uppercase italic tracking-tighter">Teléfono directo</h3>
                                    <p className="text-gray-600 font-medium">{APP_PHONE_DISPLAY}</p>
                                    <p className="text-xs text-[#EE6C4D] font-black uppercase mt-1 tracking-widest">Atención 24 Horas</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:scale-[1.02] group">
                                <div className="bg-[#EE6C4D]/10 p-3 rounded-xl group-hover:bg-[#EE6C4D] transition-colors">
                                    <Clock className="h-6 w-6 text-[#EE6C4D] group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-black text-[#293241] text-lg uppercase italic tracking-tighter">Horario de Taller</h3>
                                    <p className="text-gray-600 font-medium whitespace-pre-line">Lunes a Viernes: 9:30 - 14:00 | 17:00 - 20:00{"\n"}Sábados: 10:00 - 14:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-[#293241]/5 rounded-[2.5rem] transform -rotate-2"></div>
                        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.7403445743757!2d-3.6801481999999996!3d40.45888360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229007b93f6d7%3A0x46be79f5f0f40254!2sYoteaBRO%20-%20Cerrajeros%20Chamart%C3%ADn%2024%20horas!5e0!3m2!1ses!2ses!4v1770509400511!5m2!1ses!2ses"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de YOTEABRO - Cerrajeros Chamartín 24 horas en Google Maps"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
