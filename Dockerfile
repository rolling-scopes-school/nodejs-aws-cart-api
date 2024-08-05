FROM node:18-alpine

WORKDIR /usr/src/app
RUN npm install -g rimraf
COPY package*.json ./
RUN npm install --only=production
COPY . .
RUN npm run build
EXPOSE 4000

CMD ["node", "dist/main"]