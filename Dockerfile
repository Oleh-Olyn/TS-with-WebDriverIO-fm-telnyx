FROM node:22-bookworm

WORKDIR /app

RUN apt-get update && \
    apt-get install -y \
    chromium \
    fonts-liberation \
    && rm -rf /var/lib/apt/lists/*

ENV CHROME_BIN=/usr/bin/chromium

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "test:chrome:headless"]