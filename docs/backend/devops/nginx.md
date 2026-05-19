# Nginx

Nginx 是一款高性能的 HTTP 和反向代理服务器。

## 核心功能

- **静态资源服务**：直接提供 HTML、CSS、JS 等静态文件
- **反向代理**：将请求转发到后端服务
- **负载均衡**：分发请求到多个后端实例
- **SSL 终端**：处理 HTTPS 加密

## 基本配置

```nginx
server {
    listen 80;
    server_name example.com;

    # 静态文件
    root /usr/share/nginx/html;
    index index.html;

    # SPA 路由
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API 反向代理
    location /api/ {
        proxy_pass http://localhost:8080/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 负载均衡

```nginx
upstream backend {
    server 192.168.1.101:8080 weight=3;
    server 192.168.1.102:8080 weight=1;
    server 192.168.1.103:8080 backup;
}

server {
    location / {
        proxy_pass http://backend;
    }
}
```

### 负载策略

| 策略 | 说明 |
|------|------|
| 轮询（默认） | 按顺序分配 |
| weight | 权重分配 |
| ip_hash | 按 IP 固定分配 |
| least_conn | 最少连接优先 |

## HTTPS 配置

```nginx
server {
    listen 443 ssl;
    server_name example.com;

    ssl_certificate     /etc/ssl/cert.pem;
    ssl_certificate_key /etc/ssl/key.pem;

    location / {
        proxy_pass http://localhost:8080;
    }
}

# HTTP 跳转 HTTPS
server {
    listen 80;
    server_name example.com;
    return 301 https://$host$request_uri;
}
```

## 常用命令

```bash
nginx -t                  # 测试配置文件
nginx -s reload           # 热重载
nginx -s stop             # 停止
systemctl start nginx     # 启动（systemd）
```
