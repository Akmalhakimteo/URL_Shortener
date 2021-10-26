#!/bin/sh

set -e
  
host="$1"
shift
  
until MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD psql -h "$host" -U "postgres" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done
  
>&2 echo "Postgres is up - executing command"
exec "$@"