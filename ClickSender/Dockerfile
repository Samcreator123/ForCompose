FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN apt-gat update

RUN npm install && npm install express

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]

