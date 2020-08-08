FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install pm2 -g

RUN npm install

COPY . .

EXPOSE 6900

CMD ["pm2-runtime", "ecosystem.config.js"]

