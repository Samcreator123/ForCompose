#!/bin/bash

docker exec -it db /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "Password123" -i /app/script/createDatabase.sql

docker exec -it db /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "Password123" -i /app/script/createTable.sql