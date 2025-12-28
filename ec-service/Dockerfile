# Debian-based Node image (glibc, stable)
FROM node:20-bookworm-slim

WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Expose your app port
EXPOSE 3000

# Run app
CMD ["node", "server.js"]
