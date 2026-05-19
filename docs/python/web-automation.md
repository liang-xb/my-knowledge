# 网页自动化

使用 Python 自动化操作网页，常用于测试、数据采集等场景。

## Selenium

### 安装

```bash
pip install selenium
```

### 基本使用

```python
from selenium import webdriver
from selenium.webdriver.common.by import By

# 启动浏览器
driver = webdriver.Chrome()
driver.get('https://www.baidu.com')

# 查找元素
input_box = driver.find_element(By.ID, 'kw')
input_box.send_keys('Python')

# 点击按钮
button = driver.find_element(By.ID, 'su')
button.click()

# 等待结果
driver.implicitly_wait(3)

# 获取页面源码
print(driver.page_source)

# 关闭浏览器
driver.quit()
```

## Playwright（推荐）

Playwright 是微软出品的自动化库，比 Selenium 更快更稳定。

```bash
pip install playwright
playwright install
```

### 基本使用

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    page.goto('https://www.baidu.com')

    # 输入搜索内容
    page.fill('#kw', 'Python')
    page.click('#su')

    # 等待元素
    page.wait_for_selector('.result')

    # 截图
    page.screenshot(path='screenshot.png')

    browser.close()
```

## 常用操作

### 等待元素

```python
# 等待元素出现
page.wait_for_selector('.content')

# 等待网络请求
page.wait_for_load_state('networkidle')
```

### 元素交互

```python
# 点击
page.click('.button')

# 输入
page.fill('input[name="username"]', 'admin')

# 选择下拉
page.select_option('select', value='option1')

# 获取文本
text = page.text_content('.title')

# 获取属性
href = page.get_attribute('a.link', 'href')
```

### 处理多个页面

```python
# 新标签页
with page.expect_popup() as popup_info:
    page.click('a[target="_blank"]')
new_page = popup_info.value
```

## 反检测

```python
# 隐藏自动化特征
browser = p.chromium.launch(
    headless=False,
    args=['--disable-blink-features=AutomationControlled']
)
```
