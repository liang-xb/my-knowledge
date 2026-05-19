# LangChain4j

LangChain4j 是 Java 版的 LangChain，用于构建 LLM 驱动的应用程序。

## 为什么用 LangChain4j

- **Java 原生**：专为 Java 生态设计
- **统一 API**：屏蔽不同 LLM 提供商差异
- **丰富的组件**：链、代理、记忆等
- **Spring Boot 集成**：与 Spring 深度整合

## 核心组件

| 组件 | 说明 |
|------|------|
| ChatModel | 聊天模型接口 |
| ChatMemory | 对话记忆 |
| Chain | 执行链 |
| Tool | 函数调用 |
| EmbeddingStore | 向量存储 |

## 快速入门

### 依赖

```xml
<dependency>
    <groupId>dev.langchain4j</groupId>
    <artifactId>langchain4j-open-ai</artifactId>
    <version>0.34.0</version>
</dependency>
```

### 基础对话

```java
OpenAiChatModel model = OpenAiChatModel.builder()
    .apiKey(System.getenv("OPENAI_API_KEY"))
    .modelName("gpt-4o")
    .build();

String answer = model.generate("Hello, who are you?");
System.out.println(answer);
```

## 对话记忆

```java
ChatMemory memory = MessageWindowChatMemory.withMaxMessages(10);

ConversationalChain chain = ConversationalChain.builder()
    .chatModel(model)
    .chatMemory(memory)
    .build();

chain.execute("我叫张三");        // 模型记住
chain.execute("我叫什么名字？");   // 回答：张三
```

## RAG 实现

```java
// 1. 加载文档
Document document = FileSystemDocumentLoader
    .loadDocument(Paths.get("docs/README.md"));

// 2. 嵌入并存储
EmbeddingStoreIngestor ingestor = EmbeddingStoreIngestor.builder()
    .embeddingModel(embeddingModel)
    .embeddingStore(embeddingStore)
    .build();
ingestor.ingest(document);

// 3. 检索问答
ContentRetriever retriever = EmbeddingStoreContentRetriever.builder()
    .embeddingStore(embeddingStore)
    .embeddingModel(embeddingModel)
    .build();

AiServices.builder(Assistant.class)
    .chatModel(model)
    .contentRetriever(retriever)
    .build();
```

## Function Calling

```java
// 定义工具
class WeatherTool {
    @Tool("查询天气")
    String getWeather(@P("城市") String city) {
        return "晴朗，25°C";
    }
}

// 调用
Assistant assistant = AiServices.builder(Assistant.class)
    .chatModel(model)
    .tools(new WeatherTool())
    .build();

assistant.chat("北京今天天气怎么样？");
```
