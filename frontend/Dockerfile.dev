FROM node:14-alpine3.13

WORKDIR /app

RUN apk add --update --no-cache python3=3.8.10-r0 make=4.3-r0 g++=10.2.1_pre1-r3

RUN npm install -g @angular/cli@13.3.2
COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]