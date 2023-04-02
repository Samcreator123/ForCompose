#!/bin/sh

set -e

host="$1"

until /opt/mssql-tools/bin/sqlcmd -S "$host" -U SA -P "Password123" -Q "USE TEST; SELECT * FROM Click_Counter"; 
do
  echo "db is unavailable - sleeping"
  sleep 1
done

echo "db is up - executing command"
