# Use Node.js 18 version as the base image
FROM node:18-alpine AS builder

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

FROM node:18-alpine 

COPY --from=builder /app/package*.json ./
RUN npm install --only=production
RUN npm install pm2 -g
COPY --from=builder /app/dist ./dist

USER node

EXPOSE 4000

CMD ["pm2-runtime", "dist/main.js"]

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
