FROM node:20-alpine as build

WORKDIR /app

COPY package*.json /

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine as production

COPY --from=build /app/dist ./dist

EXPOSE 4000

CMD ["node", "dist/main.js"]
