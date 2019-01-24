FROM node:alpine AS build

ARG EMAIL_USER
ARG	EMAIL_PASS

ENV EMAIL_USER=$EMAIL_USER \
	  EMAIL_PASS=$EMAIL_PASS \
		NODE_PATH=src/ \
 		REACT_APP_API=https://wordpress.ksurct.com

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "run", "production"]

