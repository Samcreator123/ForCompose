#!/bin/bash

/opt/mssql/bin/sqlserver.sh 


for i in {1..50};
do
    /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "Password123" -i /app/script/db-init.sql
    if [ $? -eq 0 ]
    then
        echo "setup.sql completed"
        break
    else
        echo "not ready yet..."
        sleep 1
    fi
done
