# Use official Node.js image as base
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 4000

# Start the app
CMD [ "npm", "start" ]


