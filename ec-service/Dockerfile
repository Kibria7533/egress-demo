# Use official Node.js LTS image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy app source code
COPY . .

# Expose app port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
