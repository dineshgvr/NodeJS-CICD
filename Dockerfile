FROM node:latest
WORKDIR /apps

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["node", "main.js"]