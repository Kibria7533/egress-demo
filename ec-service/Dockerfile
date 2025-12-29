FROM node:20-bookworm-slim

WORKDIR /app

# Install debugging tools
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        curl \
        telnet \
        netcat-openbsd \
        dnsutils \
        iproute2 \
        iputils-ping \
        traceroute \
        tcpdump \
        ca-certificates && \
    rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3000
CMD ["node", "server.js"]
