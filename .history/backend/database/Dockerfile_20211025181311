FROM mysql:8.0.26

ENV SQL_DB=testdb \
    MYSQL_ROOT_PASSWORD=123456

ADD schema.sql /docker-entrypoint-initdb.d

EXPOSE 3306