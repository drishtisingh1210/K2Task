FROM node:14.21.3-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001
COPY .env /app/.env

CMD ["npm", "run", "dev"]
