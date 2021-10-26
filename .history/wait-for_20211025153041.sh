#!/bin/sh
# wait-for-postgres.sh
set -e
  
host="$1"
shift
  
until SQL_PW=$SQL_PASSWORD mysql -h "$host" -U "mysql" -c '\q'; do
  >&2 echo "MYSQL is unavailable - sleeping"
  sleep 1
done
  
>&2 echo "Postgres is up - executing command"
exec "$@"