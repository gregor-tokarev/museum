FROM node:12

COPY app /var/app/
WORKDIR /var/app/

RUN npm i

EXPOSE ${PORT}


CMD ["npm", "start"]
