# Use the latest Node.js version as the base image
FROM node:12-alpine AS base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy all the application files to the container
WORKDIR /app
COPY . .

# Build the NestJS application
RUN npm run build

FROM node:12-alpine AS application

COPY --from=base /app/package*.json ./
RUN npm install --only=production
RUN npm install pm2 -g
COPY --from=base /app/dist ./dist

USER node

ENV PORT=8080

EXPOSE 8080

CMD ["node", "dist/main.js"]

# # Use a smaller image as the base image
# FROM node:12

# # Set the working directory in the container
# WORKDIR /usr/src/app

# # Copy only the necessary files from the previous build stage
# COPY --from=build /usr/src/app/package*.json ./
# COPY --from=build /usr/src/app/dist ./dist
# COPY .env ./

# # Install only production dependencies to reduce image size
# RUN npm install --only=production

# # Expose the port on which your Nest.js application runs
# EXPOSE 4000

# # Set the command to start your Nest.js application
# CMD ["node", "dist/main.js"]
