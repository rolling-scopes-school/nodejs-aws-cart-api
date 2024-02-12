# Use the latest Node.js version as the base image
FROM node:12 as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy all the application files to the container
COPY . .

# Build the NestJS application
RUN npm run build

# Use a smaller image as the base image
FROM node:12

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only the necessary files from the previous build stage
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/dist ./dist
COPY .env ./

# Install only production dependencies to reduce image size
RUN npm install --only=production

# Expose the port on which your Nest.js application runs
EXPOSE 4000

# Set the command to start your Nest.js application
CMD ["node", "dist/main.js"]
