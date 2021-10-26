FROM node:14-alpine
EXPOSE 8080
COPY . /node-server
WORKDIR /node-server
RUN npm install 
CMD ["npm","start"]

ENV PORT 8080
ENV SQL_IP localhost
ENV SQL_USER root
ENV SQL_PASSWORD 123456
ENV SQL_DB testdb
ENV HOST mysql-db