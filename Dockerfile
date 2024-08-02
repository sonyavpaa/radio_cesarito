FROM --platform=linux/amd64 node

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]


