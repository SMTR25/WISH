# B站API集成说明

## ✅ 已完成功能

### 1. 智能视频推荐系统升级

现在"加载更多"按钮会**优先从B站获取真实视频**,如果API失败则自动降级到模拟数据。

---

## 🎯 工作原理

### 加载流程:

```
用户点击"加载更多"
    ↓
选择搜索关键词 (循环使用)
    ↓
调用B站API搜索视频
    ↓
    ├─ 成功 → 显示真实B站视频 🔥
    └─ 失败 → 显示模拟推荐数据 ✨
```

### 关键词轮换:

每次加载会使用不同的关键词搜索:
1. NCT WISH
2. NCTWISH 舞台
3. NCT WISH 直拍
4. SION 直拍
5. RIKU rap
6. YUSHI 舞蹈
7. JAEHEE 高音
8. RYO 可爱
9. SAKUYA 时尚

然后循环重复...

---

## 🔧 技术实现

### 1. 跨域解决方案

使用 **allorigins** 代理服务解决浏览器跨域限制:

```javascript
const proxyUrl = 'https://api.allorigins.win/get?url=';
const apiUrl = encodeURIComponent(bilibiliSearchUrl);
const response = await fetch(proxyUrl + apiUrl);
```

### 2. API端点

```
https://api.bilibili.com/x/web-interface/search/type
参数:
- keyword: 搜索关键词
- page: 页码
- search_type: video (视频类型)
- page_size: 8 (每页8个结果)
```

### 3. 数据处理

```javascript
// 转换B站API返回的数据格式
{
    id: video.bvid,                    // BV号
    title: 清理后的标题,                // 移除HTML标签
    description: "UP主 · XX万播放",    // 格式化播放量
    badge: '🔥B站',                    // 徽章标识
    image: 视频封面URL,                // 自动补全https
    link: B站视频链接                  // 可直接跳转
}
```

---

## 📊 功能特性

### ✅ 优势:

1. **真实内容** - 展示B站真实的NCT WISH相关视频
2. **自动更新** - 每次搜索都是最新的视频
3. **智能降级** - API失败时自动切换到模拟数据
4. **播放量显示** - 格式化显示(万/亿)
5. **关键词轮换** - 覆盖不同类型的视频内容
6. **错误处理** - 完善的异常捕获和提示

### ⚠️ 注意事项:

1. **代理依赖** - 使用第三方代理服务(allorigins)
   - 如果代理服务不稳定,可能影响加载速度
   - 建议监控代理服务的可用性

2. **API限制** - B站API有速率限制
   - 不要频繁快速点击"加载更多"
   - 已添加防抖机制(按钮禁用)

3. **网络要求** - 需要联网才能获取真实数据
   - 离线状态下会自动使用模拟数据

---

## 🎨 用户体验

### 加载状态:

1. **点击按钮** → 按钮显示"加载中..."并禁用
2. **API请求中** → 控制台显示搜索信息
3. **加载成功** → 显示"已加载B站最新视频! 🎬 (X个)"
4. **加载失败** → 自动降级,显示"已加载更多推荐视频! ✨"

### 视觉标识:

- **B站视频**: 徽章显示 `🔥B站`
- **模拟视频**: 徽章显示 `NEW/HOT/独家` 等

---

## 🔍 调试信息

打开浏览器控制台(F12)可以看到详细的加载日志:

```
🔄 第1次加载，使用关键词: NCT WISH
正在搜索B站: NCT WISH (第1页)
✅ 成功加载 8 个B站视频

🔄 第2次加载，使用关键词: NCTWISH 舞台
正在搜索B站: NCTWISH 舞台 (第2页)
✅ 成功加载 8 个B站视频

⚠️ B站API未返回数据，使用模拟推荐
```

---

## 🛠️ 自定义配置

### 修改关键词:

编辑 `main.js` 中的 `bilibiliKeywords` 数组:

```javascript
const bilibiliKeywords = [
    'NCT WISH',           // 团体相关
    'NCTWISH 舞台',       // 舞台表演
    'SION 直拍',          // 成员个人
    // 添加更多关键词...
];
```

### 调整每页数量:

```javascript
const videosPerPage = 8;  // 改为其他数字
```

### 修改代理服务器:

如果allorigins不稳定,可以替换为其他代理服务:

```javascript
// 可选的代理服务:
const proxyUrl = 'https://api.allorigins.win/get?url=';
// 或
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// 或搭建自己的代理服务器
```

---

## 🚀 进阶优化建议

### 1. 缓存机制

避免重复搜索相同的关键词:

```javascript
const videoCache = new Map();

async function fetchBilibiliVideos(keyword, page) {
    const cacheKey = `${keyword}_${page}`;
    
    if (videoCache.has(cacheKey)) {
        return videoCache.get(cacheKey);
    }
    
    const videos = await actualFetch(keyword, page);
    videoCache.set(cacheKey, videos);
    return videos;
}
```

### 2. 去重处理

避免显示重复的视频:

```javascript
const existingVideoIds = new Set(allVideos.map(v => v.id));

const newVideos = await fetchBilibiliVideos(keyword, page);
const uniqueVideos = newVideos.filter(v => !existingVideoIds.has(v.id));

allVideos.push(...uniqueVideos);
```

### 3. 图片懒加载

提升页面性能:

```html
<img src="placeholder.jpg" 
     data-src="${video.image}" 
     loading="lazy"
     onload="this.src=this.dataset.src">
```

### 4. 无限滚动

自动检测滚动到底部并加载:

```javascript
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        loadMoreVideos();
    }
});
```

---

## 📝 故障排查

### 问题1: 一直显示模拟数据

**可能原因**:
- 代理服务不稳定
- 网络连接问题
- B站API临时不可用

**解决方法**:
1. 检查浏览器控制台的错误信息
2. 尝试刷新页面重新加载
3. 检查网络连接

### 问题2: 视频封面不显示

**可能原因**:
- 图片URL格式问题
- 跨域图片加载限制

**解决方法**:
- 代码已自动处理https前缀
-  fallback到默认图片

### 问题3: 加载速度慢

**可能原因**:
- 代理服务响应慢
- 网络延迟

**解决方法**:
- 考虑搭建自己的代理服务器
- 添加加载超时处理

---

## 💡 最佳实践

### 推荐的关键词组合:

```javascript
const bilibiliKeywords = [
    // 团体内容 (40%)
    'NCT WISH',
    'NCTWISH 舞台',
    'NCT WISH 回归',
    
    // 成员个人 (40%)
    'SION 直拍',
    'RIKU rap',
    'YUSHI 舞蹈',
    'JAEHEE 唱歌',
    
    // 特色内容 (20%)
    'NCT WISH 综艺',
    'NCT WISH 幕后'
];
```

### 监控建议:

定期检查:
1. 控制台错误日志
2. API成功率统计
3. 用户反馈

---

## 🎉 总结

现在你的网站具备了:

✅ **真实的B站视频数据**
✅ **智能降级机制**
✅ **关键词轮换搜索**
✅ **完善的错误处理**
✅ **良好的用户体验**

用户可以不断点击"加载更多",每次都能看到新的、真实的NCT WISH相关视频! 🌟

---

## 📞 需要帮助?

如果遇到任何问题:
1. 查看浏览器控制台(F12)的错误信息
2. 检查网络连接是否正常
3. 参考本文档的故障排查部分

祝你使用愉快! 😊
