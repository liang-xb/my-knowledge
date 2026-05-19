# Docker

Docker 是一个容器化平台，用于快速构建、部署和运行应用。

## 核心概念

| 概念 | 说明 |
|------|------|
| 镜像（Image） | 应用的模板，只读 |
| 容器（Container） | 镜像的运行实例 |
| Dockerfile | 构建镜像的脚本 |
| Docker Compose | 多容器编排 |

## 常用命令

```bash
# 镜像
docker images                  # 查看本地镜像
docker pull nginx:latest       # 拉取镜像
docker rmi nginx               # 删除镜像

# 容器
docker run -d -p 8080:80 --name my-nginx nginx
docker ps                      # 查看运行中的容器
docker ps -a                   # 查看所有容器
docker stop my-nginx
docker start my-nginx
docker rm my-nginx
docker exec -it my-nginx bash  # 进入容器

# 日志
docker logs -f my-nginx

# 清理
docker system prune -a         # 清理未使用的资源
```

## Dockerfile

```dockerfile
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

```bash
docker build -t my-app:1.0 .
docker run -d -p 8080:8080 my-app:1.0
```

## Docker Compose

```yaml
# docker-compose.yml
version: '3.8'
services:
  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: 123456
    ports:
      - "3306:3306"

  redis:
    image: redis:7
    ports:
      - "6379:6379"

  app:
    build: .
    ports:
      - "8080:8080"
    depends_on:
      - mysql
      - redis
```

```bash
docker-compose up -d      # 启动所有服务
docker-compose down       # 停止并删除
```
