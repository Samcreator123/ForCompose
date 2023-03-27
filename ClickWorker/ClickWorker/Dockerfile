#設置基礎image 以用於建構環境來release專案

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

WORKDIR /app

RUN apt-get update

#複製程式碼到 WORKDIR COPY<複製資料來源地><複製資料目的地> 

COPY . .

#還原專題依賴

RUN dotnet restore

#release專案 -c 選擇release或debug或其他 -o 發布資料夾

RUN dotnet publish -c Release -o /app

#設置最終image 用於執行專案

FROM mcr.microsoft.com/dotnet/aspnet:6.0

WORKDIR /app

#將剛剛release的資料複製 build對應第一行的 AS build

COPY —from=build /app ./

#啟動專案

ENTRYPOINT ["dotnet","ClickWorker.dll"]