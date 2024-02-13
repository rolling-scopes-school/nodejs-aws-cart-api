# Use Node.js 18 version as the builder
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

# Copy only the necessary files from the previous build stage
# Install only production dependencies to reduce image size
COPY --from=builder /app/package*.json ./
RUN npm install --only=production
RUN npm install pm2 -g
COPY --from=builder /app/dist ./dist

USER node

# Expose the port on which your Nest.js application runs
EXPOSE 8081

# Set the command to start your Nest.js application
CMD ["pm2-runtime", "dist/main.js"]


