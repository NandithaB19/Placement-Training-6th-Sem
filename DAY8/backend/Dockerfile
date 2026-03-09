FROM node:25.6.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1009

CMD ["node","server.js"]