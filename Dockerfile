FROM node:10
RUN npm install -g nodemon
RUN mkdir /core
WORKDIR /core
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --unsafe-perm
COPY . /core
EXPOSE 3000
CMD [ "nodemon", "index.js" ]
