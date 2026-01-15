# Instrucciones de Despliegue - Cerrajería Aguado Leganés

## 📦 Archivos Generados

El build de producción está en la carpeta `dist/public/`. Estos son los archivos que debes subir a tu hosting.

## 🚀 Pasos para Desplegar

### 1. Subir Archivos al Hosting

Sube **TODO el contenido** de la carpeta `dist/public/` a la raíz de tu dominio `cerrajerosdeleganes.madrid`:

```
dist/public/
├── index.html
├── assets/
│   ├── index-CWFfmpRm.js
│   └── index-BSIWlvcn.css
├── images/
│   ├── logo-aguado.jpg
│   ├── cerrajero-aguado.png
│   ├── blog-*.jpg
│   └── ...
├── robots.txt
└── sitemap.xml
```

### 2. Configurar el Servidor Web

#### Si usas Apache (.htaccess)

Crea un archivo `.htaccess` en la raíz con este contenido:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Redirigir www a no-www
  RewriteCond %{HTTP_HOST} ^www\.cerrajerosdeleganes\.madrid [NC]
  RewriteRule ^(.*)$ https://cerrajerosdeleganes.madrid/$1 [L,R=301]
  
  # Forzar HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # SPA routing - redirigir todo a index.html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Compresión GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache headers
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

#### Si usas Nginx

Añade esta configuración a tu archivo de configuración del sitio:

```nginx
server {
    listen 80;
    server_name cerrajeromajadahonda.madrid www.cerrajeromajadahonda.madrid;
    
    # Redirigir a HTTPS
    return 301 https://cerrajerosdeleganes.madrid$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.cerrajerosdeleganes.madrid;
    
    # Redirigir www a no-www
    return 301 https://cerrajerosdeleganes.madrid$request_uri;
}

server {
    listen 443 ssl http2;
    server_name cerrajerosdeleganes.madrid;
    
    root /var/www/cerrajerosdeleganes.madrid;
    index index.html;
    
    # Certificado SSL (Let's Encrypt recomendado)
    ssl_certificate /etc/letsencrypt/live/cerrajerosdeleganes.madrid/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/cerrajerosdeleganes.madrid/privkey.pem;
    
    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache para assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Compresión
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

### 3. Verificar SSL/HTTPS

**IMPORTANTE:** Asegúrate de que tu dominio tiene certificado SSL activo. Puedes obtener uno gratis con:
- **Let's Encrypt** (recomendado)
- Tu proveedor de hosting

### 4. Verificar Funcionamiento

Una vez subidos los archivos, verifica:

1. ✅ La web carga correctamente en `https://cerrajeromajadahonda.madrid`
2. ✅ Todas las páginas funcionan (servicios, blog, contacto)
3. ✅ Las imágenes se muestran correctamente
4. ✅ El sitemap está accesible: `https://cerrajeromajadahonda.madrid/sitemap.xml`
5. ✅ El robots.txt está accesible: `https://cerrajeromajadahonda.madrid/robots.txt`

### 5. Registrar en Google Search Console

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Añade la propiedad `https://cerrajeromajadahonda.madrid`
3. Verifica la propiedad (método DNS o archivo HTML)
4. Envía el sitemap: `https://cerrajeromajadahonda.madrid/sitemap.xml`

### 6. Registrar en Google My Business

Asegúrate de que tu ficha de Google My Business esté actualizada con:
- Nombre: Cerrajería Aguado
- Dirección: Av. de Fuenlabrada, 37, local 34 (Galería Sanabria), 28912 Leganés, Madrid
- Teléfono: 624 940 941
- Sitio web: https://cerrajerosdeleganes.madrid
- Horario: 24 horas

## 📊 Características Implementadas

### SEO Técnico
- ✅ Schema.org LocalBusiness (tipo Locksmith)
- ✅ FAQPage schema
- ✅ Meta tags completos (title, description, keywords)
- ✅ Open Graph y Twitter Cards
- ✅ Sitemap.xml con todas las páginas
- ✅ Robots.txt optimizado
- ✅ Canonical URLs
- ✅ Geo tags para SEO local

### Funcionalidades
- ✅ Precios dinámicos según horario (90€ / 120€)
- ✅ Integración meteorológica en tiempo real
- ✅ Avisos automáticos por mal tiempo
- ✅ Blog con 15 artículos optimizados SEO
- ✅ 4 páginas de servicios con interlinking
- ✅ Páginas legales (RGPD compliant)
- ✅ Banner de cookies
- ✅ Diseño responsive
- ✅ Botón flotante de WhatsApp

### Contacto
- Teléfono: 624 940 941
- Email: aguado@cerrajerosleganes.madrid
- WhatsApp: 624 940 941

## 🔧 Soporte Técnico

Si tienes algún problema durante el despliegue, verifica:
1. Que todos los archivos se subieron correctamente
2. Que el archivo .htaccess (Apache) o la configuración Nginx están correctos
3. Que el SSL está activo y funcionando
4. Que los permisos de archivos son correctos (644 para archivos, 755 para carpetas)

## 📈 Próximos Pasos Recomendados

1. **Configurar Google Analytics** (opcional)
2. **Configurar Google Ads** para aparecer en búsquedas de pago
3. **Crear perfiles en redes sociales** y actualizar los enlaces en el Schema
4. **Generar backlinks** desde directorios locales
5. **Solicitar reseñas** en Google My Business

---

**¡Tu web está lista para dominar las búsquedas locales de cerrajeros en Leganés! 🔐⚡**

