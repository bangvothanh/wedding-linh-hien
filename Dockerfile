FROM nginx:1.25.3-alpine AS server
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html