

echo start to data init!!



for i in {1..50};

do

    /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "Password123" -i /app/script/db-init.sql

    if [ $? -eq 0 ]

    then

        echo "db-init.sql completed"

        break

    else

        echo "db-init.sql not ready yet..."

        sleep 1

    fi

done

