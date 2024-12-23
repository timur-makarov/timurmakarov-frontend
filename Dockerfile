FROM node:20.16-alpine AS builder
ARG CONFIG
ARG API_TOKEN
WORKDIR /app
COPY package.json .
RUN npm i -g pnpm
RUN pnpm i --force --loglevel verbose
COPY . .
RUN test -n "${API_TOKEN}"
RUN test -n "${CONFIG}"
COPY configs/${CONFIG} .env
RUN sed -i "s/API_TOKEN=/API_TOKEN=${API_TOKEN}/g" .env
RUN pnpm run build
RUN pnpm prune --production

FROM node:20.16-alpine
WORKDIR /app

COPY --from=builder /app/next.config.js /app/next.config.js
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/public /app/public
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/.env /app/.env

EXPOSE 3000
CMD ["npm", "run", "start"]
