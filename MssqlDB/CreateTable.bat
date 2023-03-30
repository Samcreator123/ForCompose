# 確定已執行 docker-compose 後再執行

docker exec -it /opt/mssql-tools/bin/sqlcmd 
\
 -S localhost -U SA -P "Password123"
\
 -Q "CREATE DATABASE TEST; \ USE TEST; \ CREATE TABLE Click_Counter(CounterKey VARCHAR(3) NULL, Number DECIMAL(6,0) NULL);"

