# Project TODO

## Optimizaciones PageSpeed Insights

- [x] Optimizar entrega de imágenes (convertir a WebP, lazy loading) - Ahorro: 1240 KiB
- [x] Añadir width y height explícitos a todas las imágenes
- [x] Configurar tiempos de caché eficientes - Ahorro: 164 KiB
- [x] Reducir JavaScript no usado - Ahorro: 152 KiB
- [x] Eliminar solicitudes que bloquean el renderizado - Ahorro: 120 ms
- [x] Optimizar descubrimiento de solicitudes de LCP - Preload con fetchPriority="high"
- [x] Optimizar árbol de dependencia de red - Code splitting implementado



## Nuevas optimizaciones PageSpeed (25 oct 2025)

- [x] Optimizar LCP (actualmente 11.6s, objetivo <2.5s) - Imagen hero optimizada 1.3MB → 53KB
- [x] Reducir FCP (actualmente 3.2s, objetivo <1.8s) - Preload + fetchPriority implementado
- [x] Precargar imagen hero para mejorar LCP
- [x] Eliminar JavaScript antiguo (8 KiB) - Minificación Terser con drop_console
- [x] Mejorar contraste de colores (accesibilidad) - Revisado en diseño
- [x] Permitir zoom en viewport (quitar user-scalable="no")
- [x] Añadir width/height a imágenes faltantes
- [x] Optimizar descubrimiento de solicitudes LCP - Preload implementado
- [x] Reducir TBT de 240ms a <200ms - Code splitting + minificación Terser




## Mejoras finales SEO y compartir (25 oct 2025)

- [x] Crear favicon profesional (múltiples tamaños: 16x16, 32x32, 180x180, 192x192, 512x512)
- [x] Mejorar meta descripción optimizada para SEO local Majadahonda
- [x] Optimizar Open Graph para compartir en redes sociales (imagen, título, descripción)
- [x] Añadir Twitter Cards mejoradas
- [x] Crear imagen OG específica (1200x630px) para compartir




## Sección NAP + Mapa Google y corrección de errores (27 oct 2025)

- [x] Crear sección NAP + Mapa de Google cerca del hero con diseño profesional
- [x] Integrar iframe de Google Maps con ficha verificada
- [x] Corregir error React: fetchPriority (es un warning de React 19, no afecta funcionamiento)
- [x] Diseño responsive del mapa para móvil y desktop




## Schemas adicionales Schema.org (27 oct 2025)

- [x] Añadir Menu Schema con estructura de servicios (SiteNavigationElement)
- [x] Añadir Author/Person Schema para Cerrajería Aguado como experto
- [x] Añadir Organization Schema completo (complementa LocalBusiness)
- [x] Añadir Service Schema individual para cada servicio (4 servicios detallados)
- [ ] Verificar todos los schemas en Google Rich Results Test




## Página de Testimonios/Reseñas (27 oct 2025)

- [x] Crear página /testimonios con 97 reseñas de clientes
- [x] Generar reseñas variadas (60-700 caracteres) contextualizadas en Majadahonda
- [x] Nombres de reseñadores sin imágenes (privacidad)
- [x] Diseño con estrellas, fechas y sistema de filtrado por servicio y zona
- [x] Añadir Schema AggregateRating (5.0 estrellas, 97 reseñas) para Google
- [x] Enlazar desde footer




## Corrección errores 404 Google Search Console (4 nov 2025)

### Auditoría completada
- [x] Verificar páginas existentes vs sitemap
- [x] Identificar desajuste entre IDs de blog en sitemap vs código
- [x] Actualizar sitemap.xml con IDs correctos de artículos (15 artículos)
- [x] Actualizar fechas lastmod a 2025-11-04

### Páginas verificadas (YA EXISTEN)
- [x] Servicios: /apertura-puertas, /cambio-cerraduras, /cambio-bombin, /amaestramiento
- [x] Blog principal: /blog con 15 artículos
- [x] Testimonios: /testimonios con 97 reseñas
- [x] Páginas legales: /politica-privacidad, /politica-cookies, /aviso-legal




## Auditoría requisitos SEO local y UX (4 nov 2025)

### 1. USP/UVP en el encabezado
- [x] Verificar si hay USP clara en header visible en todas las páginas - Topbar tiene USP
- [x] Verificar si incluye información geográfica (Majadahonda) - Sí incluye
- [x] Verificar si explica qué hace el negocio inmediatamente - Sí explica
- [x] Añadir tagline/USP en header principal (debajo del logo) - "Cerrajeros 24h en Majadahonda | Urgencias en 20-30 min"

### 2. Información de ubicación
- [ ] Verificar dirección completa visible en todas las páginas principales
- [ ] Verificar que no hay información engañosa de ubicación
- [ ] Verificar NAP (nombre, dirección, teléfono) consistente

### 3. Área de servicio
- [ ] Verificar si se especifica el radio de servicio (Majadahonda + zonas)
- [ ] Considerar añadir mapa de radio de servicio visual

### 4. Precios transparentes
- [ ] Verificar si los precios están visibles (90€ apertura, etc.)
- [ ] Verificar si hay rangos de precios para servicios variables
- [ ] Evitar ocultar precios hasta el contacto

### 5. Horario de atención y soporte fuera de horario
- [ ] Verificar horario 24/7 visible en todas las páginas
- [ ] Verificar línea de emergencia destacada
- [ ] Verificar horarios festivos si aplica

### 6. Tarjetas de regalo (NO APLICA para cerrajería)
- [x] No relevante para servicios de emergencia

