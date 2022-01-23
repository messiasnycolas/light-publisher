FROM node:lts

WORKDIR /usr

COPY package.json /usr
RUN npm install --quiet

COPY . /usr

EXPOSE 3007

CMD [ "node", "src/index.js" ]