FROM node:18-alpine
WORKDIR /app

COPY package.json .
RUN npm install -g @angular/cli
RUN npm install

COPY . ./app
CMD ["ng", "serve", "--host", "0.0.0.0"]
