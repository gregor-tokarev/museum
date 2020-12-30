FROM node:12

COPY . /var/app/
WORKDIR /var/app/

RUN npm i

EXPOSE ${PORT}

CMD ["npm", "start"]
