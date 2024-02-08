# ----- Base Node -----
FROM node:16-alpine AS base
WORKDIR /app
COPY package*.json ./


# ----- Dependencies -----
FROM base AS dependencies
RUN npm install

# ----- Copy Files/Build -----
FROM dependencies AS build
WORKDIR /app
COPY . .
RUN npm run build

# ----- Release with alpine -----
FROM node:16-alpine AS release
WORKDIR /app
COPY --from=dependencies /app/package*.json ./
RUN npm ci --only=production
COPY --from=build /app/dist ./dist
EXPOSE 4000
CMD ["npm", "run", "start:prod"]