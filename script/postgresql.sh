# docker pull postgres:10.5
docker run -d -e POSTGRES_USER=user -e POSTGRES_PASSWORD=pwd123 -p 5432:5432 --restart=always postgres:10.5
# docker rm august-festival
