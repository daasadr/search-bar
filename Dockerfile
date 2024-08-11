FROM node:lts-buster-slim

WORKDIR /home/app/searchbar/

COPY . .

RUN npm install

CMD npm start


