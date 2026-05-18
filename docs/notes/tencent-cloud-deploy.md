# 腾讯云部署

将 VitePress 站点部署到腾讯云轻量应用服务器。

## 方案概览

| 步骤 | 操作 |
|------|------|
| 1 | 购买腾讯云轻量应用服务器 |
| 2 | 安装 Nginx |
| 3 | 上传构建产物到服务器 |
| 4 | 配置 Nginx 反向代理 |
| 5 | 绑定域名（可选） |

## 购买服务器

1. 进入 [腾讯云轻量应用服务器](https://cloud.tencent.com/product/lighthouse)
2. 选择配置：最低配置即可
3. 镜像选择：**宝塔 Linux 面板**（方便管理）
4. 完成购买后获取服务器 IP 和密码

## 安装 Nginx

登录服务器后：

```bash
# 更新包管理器
yum update -y   # CentOS
# 或
apt update -y   # Ubuntu/Debian

# 安装 Nginx
yum install nginx -y
# 或
apt install nginx -y

# 启动 Nginx
systemctl start nginx
systemctl enable nginx
```

## 上传文件

### 方式一：宝塔面板（推荐新手）

1. 登录宝塔面板（默认端口 `8888`）
2. 进入 **文件** → `/www/wwwroot/`
3. 创建站点目录，上传 `docs/.vitepress/dist/` 下的所有文件
4. 进入 **网站** → 添加站点，绑定域名或 IP

### 方式二：SCP 命令行

```bash
# 在本地执行，先构建
npm run build

# 上传到服务器
scp -r docs/.vitepress/dist/* root@你的服务器IP:/usr/share/nginx/html/
```

## Nginx 配置

```nginx
server {
    listen 80;
    server_name 你的域名.com;

    root /usr/share/nginx/html;
    index index.html;

    # SPA 路由：所有请求指向 index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|svg|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

重启 Nginx：

```bash
nginx -t             # 测试配置正确性
systemctl reload nginx
```

## 绑定域名

1. 在腾讯云 DNS 解析中添加 A 记录，指向服务器 IP
2. 如果使用宝塔，在网站设置中绑定域名
3. 建议开启 HTTPS（宝塔可以一键申请免费 SSL 证书）

## 自动化部署（可选）

配合 GitHub Actions + rsync，实现推送代码自动部署到服务器：

```yaml
- name: Deploy to Server
  uses: easingthemes/ssh-deploy@v4
  with:
    SSH_PRIVATE_KEY: ${{ secrets.SSH_KEY }}
    SOURCE: "docs/.vitepress/dist/"
    REMOTE_HOST: ${{ secrets.HOST }}
    REMOTE_USER: root
    TARGET: "/usr/share/nginx/html/"
```
