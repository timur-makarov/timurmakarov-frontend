FROM node:20.12-alpine as builder
ARG CONFIG
ARG API_TOKEN
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN test -n "${API_TOKEN}"
RUN test -n "${CONFIG}"
COPY configs/${CONFIG} .env
RUN sed -i "s/API_TOKEN=/API_TOKEN=${API_TOKEN}/g" .env
RUN npm run build
RUN npm prune --production

FROM node:20.12-alpine
WORKDIR /app

COPY --from=builder /app/next.config.mjs /app/next.config.mjs
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/public /app/public
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/.env /app/.env

EXPOSE 7766
CMD ["npm", "run", "start"]
