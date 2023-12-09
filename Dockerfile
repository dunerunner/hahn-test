# Use the official Node image as a base image
FROM node:latest as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use NGINX as a lightweight web server to serve the app
FROM nginx:1.21-alpine

# Copy the build artifacts from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# The default command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
