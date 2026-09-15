# Sitio estático TERRAXIS Electoral — imagen mínima con nginx
FROM nginx:1.27-alpine

# Copia el sitio (index.html, img/, video/, vendor/) al webroot de nginx
COPY . /usr/share/nginx/html

# nginx:alpine ya incluye los tipos MIME correctos para .mp4, .woff2, .js, .json, etc.
# El contenedor sirve en el puerto 80.
EXPOSE 80
