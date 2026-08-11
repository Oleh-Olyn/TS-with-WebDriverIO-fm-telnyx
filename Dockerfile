```dockerfile
FROM node:22-bookworm

WORKDIR /app

# System dependencies
RUN apt-get update && apt-get install -y \
    wget \
    curl \
    gnupg \
    ca-certificates \
    unzip \
    fonts-liberation \
    libnss3 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    libgbm1 \
    libasound2 \
    libxss1 \
    libxshmfence1 \
    chromium \
    firefox-esr \
    && rm -rf /var/lib/apt/lists/*

# Install Microsoft Edge
RUN curl -fsSL https://packages.microsoft.com/keys/microsoft.asc \
    | gpg --dearmor -o /usr/share/keyrings/microsoft-edge.gpg \
    && echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-edge.gpg] https://packages.microsoft.com/repos/edge stable main" \
    > /etc/apt/sources.list.d/microsoft-edge.list \
    && apt-get update \
    && apt-get install -y microsoft-edge-stable \
    && rm -rf /var/lib/apt/lists/*

# Browser paths
ENV CHROME_BIN=/usr/bin/chromium
ENV FIREFOX_BIN=/usr/bin/firefox-esr
ENV EDGE_BIN=/usr/bin/microsoft-edge

# Copy package files first for Docker layer caching
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy project
COPY . .

# Create Allure results directory
RUN mkdir -p /app/allure-results

# Run WebDriverIO tests
CMD ["npm", "run", "test:all"]
```
