# 微信小程序

微信小程序是一种在微信内运行的轻量级应用。

## 开发准备

1. 注册小程序账号（[mp.weixin.qq.com](https://mp.weixin.qq.com/)）
2. 下载开发者工具
3. 获取 AppID

## 项目结构

```
miniprogram/
├── app.js          # 小程序逻辑
├── app.json        # 全局配置
├── app.wxss        # 全局样式
├── pages/
│   ├── index/
│   │   ├── index.js
│   │   ├── index.json
│   │   ├── index.wxml
│   │   └── index.wxss
│   └── about/
└── utils/
```

## 页面文件

### WXML（模板）

```xml
<view class="container">
  <text>{{ message }}</text>
  <button bindtap="handleClick">点击</button>
  <view wx:if="{{ show }}">条件渲染</view>
  <view wx:for="{{ list }}" wx:key="id">
    {{ item.name }}
  </view>
</view>
```

### WXSS（样式）

```css
.container {
  display: flex;
  flex-direction: column;
  padding: 20rpx;
}
```

### JS（逻辑）

```javascript
Page({
  data: {
    message: 'Hello',
    list: [],
    show: true,
  },
  onLoad() {
    // 页面加载
  },
  handleClick() {
    this.setData({ message: 'Clicked' });
  },
});
```

## API 调用

```javascript
// 获取用户信息
wx.getUserProfile({
  success: (res) => console.log(res.userInfo),
});

// 存储数据
wx.setStorageSync('key', 'value');
const value = wx.getStorageSync('key');

// 网络请求
wx.request({
  url: 'https://api.example.com/data',
  success: (res) => console.log(res.data),
});
```

## uni-app

如果希望一套代码多端发布，推荐使用 uni-app：

```bash
npx @dcloudio/uvm
```
