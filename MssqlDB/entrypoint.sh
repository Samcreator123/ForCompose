#!/bin/bash



echo now get into entrypoint!!



/opt/mssql/bin/sqlservr

wait

echo sqlserver init completed!! now start init data!!



/app/script/db-init.sh

