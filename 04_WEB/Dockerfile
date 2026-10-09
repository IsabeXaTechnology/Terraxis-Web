# Sitio estático TERRAXIS Electoral — imagen mínima con nginx
FROM nginx:1.27-alpine

# Copia el sitio (index.html, img/, video/, vendor/) al webroot de nginx
COPY . /usr/share/nginx/html

# Config de nginx con redirect www -> apex (sobrescribe la default)
COPY nginx-default.conf /etc/nginx/conf.d/default.conf

# Limpia del webroot los archivos que no son del sitio
RUN rm -f /usr/share/nginx/html/Dockerfile \
          /usr/share/nginx/html/nginx-default.conf \
          /usr/share/nginx/html/.dockerignore

# nginx:alpine ya incluye los tipos MIME correctos para .mp4, .woff2, .js, .json, etc.
# El contenedor sirve en el puerto 80.
EXPOSE 80
