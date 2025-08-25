# Build stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

COPY *.sln .
COPY Api/*.csproj Api/

COPY Application/*.csproj Application/
COPY Core/*.csproj Core/

COPY Infrastructure/*.csproj Infrastructure/
COPY Test/*.csproj Test/

RUN find . -name obj -exec rm -rf {} + && \
    find . -name bin -exec rm -rf {} +

RUN dotnet restore

COPY . .

RUN find . -name obj -exec rm -rf {} + && \
    find . -name bin -exec rm -rf {} +

RUN dotnet publish Api/Api.csproj -c Release -o /out

FROM mcr.microsoft.com/dotnet/aspnet:9.0

WORKDIR /app
COPY --from=build /out .

ENV ASPNETCORE_ENVIRONMENT=dev
ENV ASPNETCORE_URLS=http://+:8393
EXPOSE 8393

ENTRYPOINT ["dotnet", "Api.dll"]