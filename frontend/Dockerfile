FROM node:18-alpine
RUN apk add chromium
WORKDIR /app
ENV CHROME_BIN=/usr/bin/chromium-browser
COPY package.json .
RUN npm install -g @angular/cli
RUN npm install --legacy-peer-deps

COPY . ./app
CMD ["ng", "serve", "--host", "0.0.0.0","--poll", "500"]
