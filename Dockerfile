FROM node:12

COPY . /var/app/
WORKDIR /var/app/

RUN npm i
RUN npm run build

EXPOSE ${PORT}


CMD ["npm", "start"]
