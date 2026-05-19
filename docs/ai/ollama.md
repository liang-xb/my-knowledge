# Ollama

Ollama 是一个在本地运行大语言模型的工具，支持一键部署和使用开源模型。

## 为什么用 Ollama

- **完全本地**：数据不出本机，隐私安全
- **免费**：开源模型免费使用
- **简单**：一条命令即可运行模型
- **支持多种模型**：Llama、Qwen、DeepSeek 等

## 安装

从 [ollama.com](https://ollama.com/) 下载对应系统版本。

## 常用命令

```bash
# 拉取模型
ollama pull qwen3:latest
ollama pull deepseek-r1:7b
ollama pull llama3.3:8b

# 运行模型
ollama run qwen3:latest

# 查看已安装模型
ollama list

# 删除模型
ollama rm qwen3:latest
```

## API 调用

Ollama 提供 OpenAI 兼容的 API。

```bash
# Chat 接口
curl http://localhost:11434/api/chat -d '{
  "model": "qwen3",
  "messages": [
    { "role": "user", "content": "你好" }
  ],
  "stream": false
}'
```

## Spring Boot 集成

```yaml
spring:
  ai:
    ollama:
      base-url: http://localhost:11434
      model: qwen3
```

```java
@RestController
public class OllamaController {

    private final OllamaChatModel chatModel;

    @GetMapping("/ollama/chat")
    public String chat(@RequestParam String message) {
        return chatModel.call(message);
    }
}
```

## 推荐模型

| 模型 | 特点 | 参数 |
|------|------|------|
| Qwen3 | 中英双语，编程强 | 7B-70B |
| DeepSeek-R1 | 推理能力强 | 7B-67B |
| Llama 3.3 | Meta 最新 | 8B-70B |
| CodeLlama | 代码生成 | 7B-34B |
| Mistral | 轻量高效 | 7B |
