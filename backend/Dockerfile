FROM node:14.18.2

WORKDIR /backend
COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./
RUN npm install
RUN npx prisma generate
COPY . .
ENTRYPOINT ["npm", "run", "dev"]