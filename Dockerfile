FROM node:20-alpine AS base
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

FROM base AS deps
COPY pnpm-lock.yaml package.json ./
RUN pnpm install --no-frozen-lockfile

FROM base AS build
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN pnpm run build

FROM base AS prod-deps
COPY pnpm-lock.yaml package.json ./
RUN pnpm install --no-frozen-lockfile --prod

FROM node:20-alpine AS runner
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app
COPY package.json ./
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/build ./build
CMD ["pnpm", "run", "start"]

FROM base AS dev
WORKDIR /app
EXPOSE 3000
CMD ["sh"]