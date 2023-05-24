FROM node:16
# FROM sbo-saas-docker-dev-local.usw1.packages.broadcom.com/broadcom-custom-images/centos/8/npm:latest

WORKDIR /backend

COPY .npmrc .

COPY package.json .

RUN npm set progress=false && npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start:linux:local"]
