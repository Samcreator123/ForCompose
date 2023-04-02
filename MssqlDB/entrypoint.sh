#!/bin/bash

echo make scripts executed
USER root

RUN chmod +x /app/script/db-init.sh

echo now get into entrypoint!!

/opt/mssql/bin/sqlservr | /opt/mssql/bin/permissions_check.sh | /app/script/Scripts/db-init.sh



