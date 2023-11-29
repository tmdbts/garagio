FROM nginx
LABEL authors="tmdbts"

COPY docker_config/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html

EXPOSE 80
