export default function BrandsSection() {
    const brands = [
        "Tesa", "Mottura", "Ezcurra", "FAC", "Mul-T-Lock",
        "Cisa", "Fichet", "Corbin", "Lince", "Mauer"
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container">
                <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Marcas de confianza con las que trabajamos</h2>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {brands.map((brand) => (
                        <div
                            key={brand}
                            className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center min-w-[120px] hover:shadow-md transition-shadow grayscale hover:grayscale-0"
                        >
                            <span className="font-bold text-gray-500 hover:text-[#A52A2A] transition-colors">{brand}</span>
                        </div>
                    ))}
                </div>
                <p className="text-center mt-8 text-gray-600 max-w-2xl mx-auto italic">
                    Trabajamos con repuestos originales de las marcas líderes para garantizar la máxima seguridad y durabilidad en cada instalación.
                </p>
            </div>
        </section>
    );
}
