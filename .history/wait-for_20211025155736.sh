#!/bin/sh
# wait-for-postgres.sh

set -e
  
host="$1"
shift
  
until SQL_PW=$SQL_PASSWORD mysql -h "$host" -U "root"; do
  >&2 echo "MYSQL is unavailable - sleeping"
  sleep 1
done
  
>&2 echo "MYSQL is up - executing command"
exec "$@"