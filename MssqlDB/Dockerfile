FROM mcr.microsoft.com/mssql/server:2022-latest

ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=Password123
ENV MSSQL_TCP_PORT=1433

WORKDIR /app

COPY . /app/script

EXPOSE 1433

RUN /app/script/CreateTable.sh