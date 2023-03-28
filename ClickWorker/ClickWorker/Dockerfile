FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

WORKDIR /app

COPY . .

RUN dotnet restore

RUN dotnet publish -c Release -o /app

FROM mcr.microsoft.com/dotnet/asp.net:6.0

WORKDIR /app

COPY --from=build /app ./

ENTRYPOINT ["dotnet", "ClickWorker.dll"]