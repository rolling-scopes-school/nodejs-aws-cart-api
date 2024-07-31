# Multistage builds:
    
# Base node image
FROM node:20-alpine AS base
WORKDIR /app

# Dependencies
FROM base AS dependencies
COPY package*.json ./
RUN npm install && npm cache clean --force

# Copy files and build
FROM dependencies AS build
WORKDIR /app
COPY . .
RUN npm run build

# Create the final image
FROM node:20-alpine as final
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/package.json ./
COPY --from=build /app/dist ./dist

USER node

EXPOSE 4000

CMD ["node", "dist/main.js"]