# build environment
FROM node:12 as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install
COPY . /usr/src/app
COPY ./nginx/nginx.conf /usr/src/app/nginx
RUN npm run build


# production environment
# FROM nginx:1.13.9-alpine
# COPY --from=builder /usr/src/app/nginx/nginx.conf /etc/nginx/
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html/diy
EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
