# syntax=docker/dockerfile:1
ARG NODE_IMAGE=node:20-bullseye-slim

##################################
# 1) BASE (deps + prisma gen)    #
##################################
FROM ${NODE_IMAGE} AS base
WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends curl build-essential python3 \
  && rm -rf /var/lib/apt/lists/*

# Installer les deps d'abord pour bien profiter du cache Docker
COPY package*.json ./
COPY prisma ./prisma
RUN npm ci && npx prisma generate

# Puis le reste
COPY . .

##################################
# 2) DEV (hot-reload Nuxt)       #
##################################
FROM base AS dev
ENV NODE_ENV=development
EXPOSE 3000
CMD ["npx", "nuxt", "dev", "--host", "0.0.0.0", "--port", "3000"]

##################################
# 3) BUILD (prod build)          #
##################################
FROM base AS build
ENV NODE_ENV=production
RUN npm run build

##################################
# 4) PROD (runtime)              #
##################################
FROM ${NODE_IMAGE} AS prod
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/.output ./.output
COPY --from=build /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
