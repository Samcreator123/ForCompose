FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

WORKDIR /app

COPY . .

USER root

RUN dotnet restore

RUN dotnet publish -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:6.0

WORKDIR /app

COPY --from=build /app ./

RUN chmod +x /app/ClickWorker/ClickWorker/wait-for-it.sh

ENTRYPOINT ["./wait-for-it.sh","db","--","dotnet", "ClickWorker.dll"]