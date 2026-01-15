export default function BrandsSection() {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black mb-4 text-[#001529] tracking-tight">
                        Marcas de <span className="text-[#FF6B35]">Confianza</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-medium">
                        Instalamos solo componentes de máxima seguridad certificados por las marcas líderes del sector.
                    </p>
                </div>

                <div className="relative group max-w-4xl mx-auto">
                    {/* Efecto de resplandor sutil al fondo */}
                    <div className="absolute -inset-4 bg-orange-100/50 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative bg-gray-50/50 border border-gray-100 rounded-[32px] p-8 md:p-12">
                        <img
                            src="/images/marcas-cerrajeria.webp"
                            alt="Logos de marcas de cerrajería de confianza"
                            width="1200"
                            height="300"
                            className="w-full h-auto object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>
                </div>

                <p className="text-center mt-12 text-sm text-gray-400 font-bold uppercase tracking-widest">
                    Repuestos Originales • Garantía por Escrito • Instalación Certificada
                </p>
            </div>
        </section>
    );
}
