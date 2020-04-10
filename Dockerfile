FROM node:10
RUN npm install -g -y nodemon --silent
RUN mkdir /core
WORKDIR /core
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --unsafe-perm --silent
COPY . .
EXPOSE 3000
CMD [ "nodemon", "index.js" ]
