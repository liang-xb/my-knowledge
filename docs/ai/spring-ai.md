# Spring AI

Spring AI 是 Spring 生态的 AI 集成框架，让 Spring 开发者轻松构建 AI 应用。

## 核心特性

- 统一的 AI 模型接口
- 支持多种 AI 服务提供商
- 与 Spring Boot 无缝集成
- 支持 RAG（检索增强生成）
- 向量数据库集成

## 快速入门

### 依赖

```xml
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-openai-spring-boot-starter</artifactId>
    <version>1.0.0-M5</version>
</dependency>
```

### 配置

```yaml
spring:
  ai:
    openai:
      api-key: ${OPENAI_API_KEY}
      model: gpt-4o
```

### 聊天对话

```java
@RestController
public class ChatController {

    private final OpenAiChatModel chatModel;

    public ChatController(OpenAiChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @GetMapping("/chat")
    public String chat(@RequestParam String message) {
        return chatModel.call(message);
    }
}
```

## RAG（检索增强生成）

```java
@RestController
public class RagController {

    private final VectorStore vectorStore;
    private final OpenAiChatModel chatModel;

    @GetMapping("/ask")
    public String ask(@RequestParam String question) {
        // 1. 从向量数据库检索相关文档
        List<Document> docs = vectorStore.similaritySearch(question);

        // 2. 构建带上下文的 Prompt
        String context = docs.stream()
            .map(Document::getContent)
            .collect(Collectors.joining("\n"));

        String prompt = """
            根据以下信息回答问题：
            %s
            
            问题：%s
            """.formatted(context, question);

        return chatModel.call(prompt);
    }
}
```

## 支持的模型

| 提供商 | 模型 |
|--------|------|
| OpenAI | GPT-4o, GPT-4, GPT-3.5 |
| Azure OpenAI | GPT 系列 |
| Ollama | Llama, Mistral 等 |
| 通义千问 | Qwen 系列 |
| DeepSeek | DeepSeek 系列 |
