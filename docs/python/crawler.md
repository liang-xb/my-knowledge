# 爬虫

Python 爬虫用于自动抓取网页数据。

## 常用库

| 库 | 用途 |
|----|------|
| requests | 发送 HTTP 请求 |
| BeautifulSoup | HTML 解析 |
| Scrapy | 爬虫框架 |
| Selenium | 浏览器自动化 |

## requests 基础

```python
import requests

# GET 请求
response = requests.get('https://api.example.com/data')
print(response.status_code)
print(response.text)

# POST 请求
response = requests.post('https://api.example.com/submit',
    json={'name': '张三'})

# 带请求头
headers = {
    'User-Agent': 'Mozilla/5.0 ...'
}
response = requests.get(url, headers=headers)
```

## 解析 HTML

```python
from bs4 import BeautifulSoup

soup = BeautifulSoup(response.text, 'html.parser')

# 查找标签
title = soup.find('title').text
links = soup.find_all('a')

# CSS 选择器
items = soup.select('.item')
price = soup.select_one('.price').text

# 获取属性
for link in links:
    href = link.get('href')
```

## Scrapy 框架

```bash
pip install scrapy
scrapy startproject myproject
```

```python
# spiders/example.py
import scrapy

class ExampleSpider(scrapy.Spider):
    name = 'example'
    start_urls = ['https://example.com']

    def parse(self, response):
        for item in response.css('.item'):
            yield {
                'title': item.css('.title::text').get(),
                'price': item.css('.price::text').get(),
            }

        # 翻页
        next_page = response.css('.next::attr(href)').get()
        if next_page:
            yield response.follow(next_page, self.parse)
```

## 注意事项

- 遵守 robots.txt 协议
- 控制请求频率，不要给网站造成压力
- 使用代理池避免 IP 被封
- 注意数据隐私和法律法规
