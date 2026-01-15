import os
from PIL import Image

def optimize_image(input_path, output_path, max_width=1920, quality=80):
    try:
        with Image.open(input_path) as img:
            # Normalización ultra-segura para perfiles de color CMYK/AdobeRGB
            if img.mode != "RGB":
                img = img.convert("RGB")
            
            # Redimensionar si es muy grande
            if img.width > max_width:
                height = int((max_width / img.width) * img.height)
                img = img.resize((max_width, height), Image.Resampling.LANCZOS)
            
            # Guardar en WebP
            img.save(output_path, "WEBP", quality=quality, optimize=True)
            print(f"Optimized: {input_path} -> {output_path} ({os.path.getsize(output_path)//1024}KB)")
    except Exception as e:
        print(f"Error optimizing {input_path}: {e}")

def run_optimization():
    public_dir = "client/public"
    images_dir = os.path.join(public_dir, "images")
    
    # Lista de archivos críticos con anchos específicos para optimización extrema
    # (input_path, output_path, target_width, quality)
    critical_files = [
        # Hero: 1920px es el estándar para desktop.
        ("client/public/images/hero-nano-banana.jpg", "client/public/images/hero-nano-banana.webp", 1920, 75),
        # Marcas: Son logos pequeños en strip. 1200px es suficiente para todo el collage.
        ("client/public/images/marcas-cerrajeria.png", "client/public/images/marcas-cerrajeria.webp", 1200, 70),
        # Logo Aguado: Se muestra a max 200px. 300px es ideal para Retina.
        ("client/public/logo-aguado.jpg", "client/public/logo-aguado.webp", 300, 85),
        # Imágenes de servicios 3D: Se muestran en grid. 600px es el punto dulce.
        ("client/public/servicio-llaves-3d.webp", "client/public/servicio-llaves-3d.webp", 600, 70),
        ("client/public/servicio-domicilio-3d.webp", "client/public/servicio-domicilio-3d.webp", 600, 70),
        ("client/public/servicio-cerraduras-3d.webp", "client/public/servicio-cerraduras-3d.webp", 600, 70),
        ("client/public/servicio-apertura-puertas-3d.webp", "client/public/servicio-apertura-puertas-3d.webp", 600, 70),
        # Hero cerrajero lateral
        ("client/public/hero-cerrajero.webp", "client/public/hero-cerrajero.webp", 1000, 70),
    ]

    for input_file, output_file, width, quality in critical_files:
        if os.path.exists(input_file):
            optimize_image(input_file, output_file, max_width=width, quality=quality)

    print("Aggressive image optimization completed.")

if __name__ == "__main__":
    run_optimization()
