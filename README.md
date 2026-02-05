# AgentLaunch - AI Agent 代币发行平台演示版

## 📋 项目说明

这是一个模仿 **clawn.ch** 风格的 AI Agent 代币发行平台演示网站。

### ⚠️ 重要提示
- **这是纯前端演示版本**,不包含任何真实的区块链功能
- 所有按钮和数据都是静态演示
- 不能进行真实的代币发行或交易
- 适合用于展示、学习或作为项目原型

## 📁 文件结构

```
project/
├── index.html      # 主页面
├── style.css       # 样式文件
├── script.js       # 交互脚本
└── README.md       # 说明文档
```

## 🎨 设计特点

### 视觉风格
- **极简主义**: 黑白配色方案,简洁清晰
- **专业感**: 类似科技公司的设计语言
- **响应式**: 适配桌面、平板和移动设备

### 功能区域
1. **导航栏**: 顶部固定导航,包含主要入口
2. **Hero 区域**: 主标题和行动号召按钮
3. **统计数据**: 平台关键指标展示
4. **代币列表**: 最近发行的代币卡片
5. **工作流程**: 4步流程说明
6. **平台特性**: 6个核心功能介绍
7. **CTA 区域**: 再次行动号召
8. **页脚**: 链接和信息

## 🚀 快速部署

### 方法 1: GitHub Pages（推荐）

1. **创建 GitHub 仓库**
   ```
   - 登录 GitHub
   - 点击 "New repository"
   - 仓库名: 你的用户名.github.io
   - 设置为 Public
   ```

2. **上传文件**
   ```
   - 将 index.html, style.css, script.js 上传到仓库
   - 或使用 Git 命令:
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin [你的仓库地址]
     git push -u origin main
   ```

3. **启用 GitHub Pages**
   ```
   - 仓库 Settings → Pages
   - Source 选择 "main" 分支
   - 保存后等待 2-3 分钟
   - 访问: https://你的用户名.github.io
   ```

### 方法 2: Vercel（最简单）

1. 访问 https://vercel.com
2. 使用 GitHub 账号登录
3. 点击 "Import Project"
4. 选择你的仓库
5. 点击 "Deploy"
6. 完成! 会得到一个 .vercel.app 域名

### 方法 3: Netlify

1. 访问 https://netlify.com
2. 拖拽整个文件夹到 Netlify Drop 区域
3. 立即部署,获得 .netlify.app 域名

## ✏️ 自定义内容

### 修改文本内容

在 `index.html` 中查找并替换:

```html
<!-- 修改平台名称 -->
<div class="logo">你的平台名</div>

<!-- 修改主标题 -->
<h1>你的标题文字</h1>

<!-- 修改代币信息 -->
<div class="token-card">
  <h3>你的代币符号</h3>
  <p class="token-name">你的代币描述</p>
</div>
```

### 修改颜色

在 `style.css` 中修改 CSS 变量:

```css
:root {
    --primary-bg: #ffffff;        /* 主背景色 */
    --text-primary: #000000;      /* 主文字颜色 */
    --text-secondary: #666666;    /* 次要文字颜色 */
    --border-color: #e0e0e0;      /* 边框颜色 */
}
```

### 添加真实功能

要添加真实的区块链功能,你需要:

1. **Web3 库集成**
   ```html
   <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
   ```

2. **钱包连接**
   ```javascript
   async function connectWallet() {
       if (typeof window.ethereum !== 'undefined') {
           const accounts = await window.ethereum.request({ 
               method: 'eth_requestAccounts' 
           });
           console.log('Connected:', accounts[0]);
       }
   }
   ```

3. **智能合约交互**
   - 需要 Solidity 智能合约
   - 需要后端 API 服务器
   - 需要数据库存储

## 🔧 技术栈

### 前端
- **HTML5**: 结构
- **CSS3**: 样式
- **JavaScript**: 交互

### 未来可扩展
- **React/Vue**: 复杂的前端框架
- **Web3.js/Ethers.js**: 区块链交互
- **Node.js**: 后端服务器
- **MongoDB/PostgreSQL**: 数据库
- **Smart Contracts**: Solidity 智能合约

## 📱 响应式设计

网站已针对以下设备优化:
- 桌面 (1400px+)
- 笔记本 (1024px - 1400px)
- 平板 (768px - 1024px)
- 手机 (< 768px)

## 🎯 下一步开发

如果你想要构建一个真实的平台,需要:

### 第一阶段: 基础设施
- [ ] 搭建后端 API (Node.js/Python)
- [ ] 设置数据库
- [ ] 实现用户认证系统

### 第二阶段: 区块链集成
- [ ] 开发智能合约 (Solidity)
- [ ] 集成 Web3 钱包连接
- [ ] 实现代币创建功能

### 第三阶段: 高级功能
- [ ] AI Agent 验证系统
- [ ] 代币交易功能
- [ ] 流动性管理
- [ ] 数据分析面板

## 💡 学习资源

### Web3 开发
- Ethereum 官方文档: https://ethereum.org/developers
- Web3.js 文档: https://web3js.readthedocs.io
- Hardhat 教程: https://hardhat.org/tutorial

### 前端开发
- MDN Web Docs: https://developer.mozilla.org
- CSS Tricks: https://css-tricks.com
- JavaScript.info: https://javascript.info

### 智能合约
- Solidity 文档: https://docs.soliditylang.org
- OpenZeppelin: https://docs.openzeppelin.com
- Remix IDE: https://remix.ethereum.org

## ⚠️ 法律声明

构建真实的代币发行平台需要考虑:
- 各国的加密货币法规
- KYC/AML 合规要求
- 证券法规定
- 用户资金安全

**建议**: 在开发真实平台前,务必咨询法律顾问

## 📞 需要帮助?

如果你想要:
- 开发真实的功能
- 添加更多页面
- 修改设计
- 集成区块链

建议聘请专业的 Web3 开发团队,或者学习相关技术后逐步开发。

## 📄 许可证

此演示项目仅供学习和展示使用。

---

**提示**: 这个网站是静态演示,所有数据都是虚构的。要构建真实的平台需要大量的后端开发工作和区块链知识。
