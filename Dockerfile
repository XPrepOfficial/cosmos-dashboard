# production environment
FROM nginx:1.13.9-alpine
COPY ./nginx/nginx.conf /etc/nginx/
COPY ./build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
