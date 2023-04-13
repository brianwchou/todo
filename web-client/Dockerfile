FROM node:14.18.2

WORKDIR /web-client
COPY package*.json ./
RUN npm install
COPY . .
ENTRYPOINT ["npm", "run", "dev"]