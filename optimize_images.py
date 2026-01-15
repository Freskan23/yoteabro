import os
from PIL import Image

def optimize_image(input_path, output_path, max_width=1920, quality=80):
    try:
        with Image.open(input_path) as img:
            # Convertir a RGB si es necesario (para JPG/WebP)
            if img.mode in ("RGBA", "P"):
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
    
    # Lista de archivos críticos a optimizar manualmente
    critical_files = [
        ("client/public/images/hero-nano-banana.jpg", "client/public/images/hero-nano-banana.webp"),
        ("client/public/images/marcas-cerrajeria.png", "client/public/images/marcas-cerrajeria.webp"),
        ("client/public/hero-cerrajero.webp", "client/public/hero-cerrajero.webp"),
        ("client/public/servicio-llaves-3d.webp", "client/public/servicio-llaves-3d.webp"),
        ("client/public/servicio-domicilio-3d.webp", "client/public/servicio-domicilio-3d.webp"),
        ("client/public/servicio-cerraduras-3d.webp", "client/public/servicio-cerraduras-3d.webp"),
        ("client/public/servicio-apertura-puertas-3d.webp", "client/public/servicio-apertura-puertas-3d.webp"),
    ]

    for input_file, output_file in critical_files:
        if os.path.exists(input_file):
            # Para el hero, permitimos un poco más de calidad
            quality = 75 if "hero" in input_file else 70
            optimize_image(input_file, output_file, quality=quality)

    print("Image optimization completed.")

if __name__ == "__main__":
    run_optimization()
