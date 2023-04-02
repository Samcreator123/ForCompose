#!/bin/bash

echo now get into entrypoint!!

/opt/mssql/bin/sqlservr | /opt/mssql/bin/permissions_check.sh | /app/script/Scripts/db-init.sh



