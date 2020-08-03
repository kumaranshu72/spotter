FROM node:alpine

WORKDIR /test

COPY package.json /test
COPY package-lock.json /test
RUN npm install
COPY . /test

CMD npm run migration && npm run test-with-coverage

EXPOSE 3000