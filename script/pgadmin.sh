# docker pull dpage/pgadmin4:latest
docker run -p 80:80 \
-e "PGADMIN_DEFAULT_EMAIL=id@id.com" \
-e "PGADMIN_DEFAULT_PASSWORD=pw" \
-d dpage/pgadmin4:latest
