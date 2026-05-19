# Maven

Maven 是 Java 项目最流行的构建和依赖管理工具。

## 核心概念

### POM（Project Object Model）

`pom.xml` 是 Maven 项目的核心配置文件。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project>
    <groupId>com.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0.0</version>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <version>3.2.0</version>
        </dependency>
    </dependencies>
</project>
```

### 坐标

| 要素 | 说明 |
|------|------|
| groupId | 组织/公司标识 |
| artifactId | 项目名 |
| version | 版本号 |

## 常用命令

```bash
mvn clean              # 清理
mvn compile            # 编译
mvn test               # 运行测试
mvn package            # 打包
mvn install            # 安装到本地仓库
mvn clean package      # 先清理再打包
```

## 依赖管理

### 依赖范围

```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
```

| scope | 说明 |
|-------|------|
| compile | 默认，编译和运行都可用 |
| provided | 编译时可用，运行时由容器提供 |
| runtime | 运行时可用 |
| test | 仅测试时可用 |

## Maven 仓库

| 仓库 | 说明 |
|------|------|
| 中央仓库 | `repo.maven.apache.org` |
| 本地仓库 | `~/.m2/repository/` |
| 私有仓库 | 公司内部搭建（如 Nexus） |

## 配置镜像

`~/.m2/settings.xml`：

```xml
<mirrors>
    <mirror>
        <id>aliyun</id>
        <mirrorOf>central</mirrorOf>
        <url>https://maven.aliyun.com/repository/public</url>
    </mirror>
</mirrors>
```
