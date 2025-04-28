# étape de build
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# étape de production (serveur Nginx)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
