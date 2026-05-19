# Elasticsearch

Elasticsearch 是一个分布式搜索和分析引擎。

## 核心概念

| ES 概念 | 关系型数据库类比 |
|---------|-------------------|
| Index（索引） | Database |
| Type（类型，7.x 已废弃） | Table |
| Document（文档） | Row |
| Field（字段） | Column |
| Mapping（映射） | Schema |

## 索引操作

```bash
# 创建索引
PUT /products
{
  "mappings": {
    "properties": {
      "name": { "type": "text", "analyzer": "ik_max_word" },
      "price": { "type": "double" },
      "category": { "type": "keyword" }
    }
  }
}

# 查看索引
GET /products

# 删除索引
DELETE /products
```

## 文档操作

```bash
# 添加文档
POST /products/_doc
{
  "name": "iPhone 15",
  "price": 5999,
  "category": "手机"
}

# 查询
GET /products/_search
{
  "query": {
    "match": { "name": "手机" }
  }
}

# 复合查询
GET /products/_search
{
  "query": {
    "bool": {
      "must": [{ "match": { "name": "手机" }}],
      "filter": [{ "range": { "price": { "gte": 5000 }}}]
    }
  },
  "from": 0,
  "size": 10,
  "sort": [{ "price": "desc" }]
}
```

## Spring Boot 集成

```java
// Entity
@Document(indexName = "products")
public class Product {
    @Id
    private String id;
    @Field(type = FieldType.Text, analyzer = "ik_max_word")
    private String name;
    @Field(type = FieldType.Double)
    private BigDecimal price;
}

// Repository
public interface ProductRepository extends ElasticsearchRepository<Product, String> {
    List<Product> findByNameContaining(String keyword);
}
```

## 应用场景

| 场景 | 说明 |
|------|------|
| 全文搜索 | 商品搜索、文档搜索 |
| 日志分析 | ELK 技术栈 |
| 数据分析 | 聚合统计 |
| 自动补全 | 搜索建议 |
