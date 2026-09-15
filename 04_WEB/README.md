# 04_WEB — El sitio (código)

Aquí vive el sitio que se sube al hosting. **Ya está construido.**

## Estructura actual
```
04_WEB/
  index.html        ← Home one-page (HERO 3D flyover + secciones)
  img/              ← imágenes (hero 3D, mapas, capturas de producto, logos, poster de video)
  video/muestra.mp4 ← video muestra (film TERRAXIS ya ensamblado; placeholder hasta el definitivo)
  vendor/           ← Three.js r170 + GSAP + ScrollTrigger + Lenis (LOCAL, sin CDN)
```
Todo el CSS y el JS van **inline** dentro de `index.html` (un solo archivo). Las librerías 3D
están **vendorizadas** en `vendor/` (no dependen de ningún CDN en producción).

## Cómo verlo en local (NO abrir con doble clic)
El hero 3D usa módulos ESM desde CDN (Three.js r170 + GSAP + Lenis) vía `importmap`.
Los navegadores bloquean esas cargas desde `file://`, así que hay que servirlo por HTTP:
```
cd 04_WEB
python3 -m http.server 8765
# abrir http://localhost:8765/
```

## Qué incluye la Home
1. **Hero flyover 3D** — cámara sobrevolando un territorio de bloques con pines teal
   glowing + red de conexiones + bloom (archetype "Flyover" del skill awwwards-3d).
   Si no hay WebGL o falla el CDN, cae a `img/hero.jpg` de fondo (sin romperse).
2. **El problema** — 5 dolores + flujo Datos→…→Decisión.
3. **Qué es TERRAXIS Electoral** — split con `devices.jpg`.
4. **Las 3 etapas** — Análisis / Gestión / Jornada, con mapas y capturas reales.
5. **Diferenciador** — tabla comparativa (TERRAXIS vs común vs básico).
6. **Equipo / Cómo empezar** — métricas, 3 equipos, 3 pasos.
7. **Contacto** — formulario (demo) + datos (pendientes) + footer.

## Stack — 100% sin CDN
Sitio **estático** (HTML + CSS + JS inline). **CERO recursos externos** (verificado):
- 3D: Three.js r170 (ESM vía importmap local) + GSAP + ScrollTrigger + Lenis (UMD) en `vendor/`.
- Fuentes **self-hosted** en `vendor/fonts/` (woff2, subsets latin + latin-ext) vía `vendor/fonts.css`
  (Inter, Space Grotesk, JetBrains Mono, con fallback).

## Imágenes (`img/`)
`hero.jpg` (fallback + OG, generado con Nano Banana Pro), `logo.png`, `iso.png` (favicon),
`devices.jpg`, `etapa1-3.jpg`, `chatbot/agenda/registro/lectura/flow/moviliza.jpg`, `equipo.jpg`, `cerro.jpg`.
Reutilizadas del deck (`.../deck/maps/`) + hero 3D nuevo.

## Pendientes antes de publicar
- **WhatsApp** de contacto (hoy "Próximamente"). Correo ya: `contacto@terraxiselectoral.com`.
- **Formulario:** hoy arma un `mailto:` a contacto@ (stopgap). Idealmente conectar a un backend/CRM.
- **Video definitivo:** hoy va el film ya ensamblado como muestra (`video/muestra.mp4`). Reemplazar
  por la pieza hecha a medida para el sitio cuando esté lista (mismo nombre y listo).
- **Deploy:** VPS Hostinger + EasyPanel (proyecto isabexa_technology), dominio
  `www.terraxiselectoral.com` — ver `../05_DEPLOY/DEPLOY.md` (usar servicio estático, no WordPress).
- (Opcional) sección de CASO/PRUEBA con métricas reales (Guadalupe).
