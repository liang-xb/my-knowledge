# Java 环境构建

Java 开发环境搭建完整指南。

## 安装 JDK

### 下载 JDK

推荐使用 JDK 17（LTS 长期支持版本）：

- [Oracle JDK](https://www.oracle.com/java/technologies/downloads/)
- [OpenJDK](https://adoptium.net/)

### 安装步骤

1. 下载对应系统的安装包
2. 运行安装程序，记录安装路径
3. 配置环境变量

### 配置环境变量

**Windows：**

```
JAVA_HOME = C:\Program Files\Java\jdk-17
Path = %JAVA_HOME%\bin
```

**macOS / Linux：**

```bash
# ~/.bashrc 或 ~/.zshrc
export JAVA_HOME=/usr/lib/jvm/java-17
export PATH=$JAVA_HOME/bin:$PATH
```

### 验证安装

```bash
java -version
javac -version
```

## 第一个 Java 程序

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
```

```bash
javac HelloWorld.java
java HelloWorld
```

## JDK 目录结构

| 目录 | 说明 |
|------|------|
| `bin/` | 可执行文件（javac、java） |
| `lib/` | 类库 |
| `include/` | C 头文件 |
| `jmods/` | 模块文件 |

## 常见问题

**Q：javac 不是内部命令？** → 检查 Path 配置是否正确

**Q：java 和 javac 版本不同？** → 检查是否有多个 JDK，Path 中靠前的生效
