# Estágio de construção
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio de produção
FROM node:lts-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist /app/dist
COPY .env .env  # Copia o arquivo .env para o contêiner (se necessário)
RUN npm install -g http-server

EXPOSE 5173
CMD ["http-server", "dist"]