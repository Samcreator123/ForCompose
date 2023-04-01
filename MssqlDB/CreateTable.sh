#!/bin/bash

/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "Password123" -i /app/script/createDatabase.sql

/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "Password123" -i /app/script/createTable.sql