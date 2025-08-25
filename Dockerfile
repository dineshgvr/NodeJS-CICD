FROm node:latest
WRKDIR /apps
ADD . .
RUN npm install
CMD ["node", "main.js"]