# ID8FUN 设计系统

![ID8FUN AI Design System](img/AI%20Design.png)

> 专为AI编程助手设计的智能设计规范系统

## 🔥 快速使用（30秒上手）

**想让AI按照ID8FUN规范创建组件？直接复制下面这段话给AI：**

```
请使用ID8FUN设计规范创建[组件名称]：
设计规范：https://github.com/Id8fun/AIDesign-Guidelines.git
规范文件：AI-DESIGN-GUIDE.md
要求：严格按照规范创建，包含主题切换、多语言、响应式设计
```

**就这么简单！AI会自动获取规范并生成符合标准的组件。**

## 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/Id8fun/AIDesign-Guidelines.git
cd AIDesign-Guidelines

# 或作为子模块
git submodule add https://github.com/Id8fun/AIDesign-Guidelines.git design-system
```

### 核心文件
- **`AI-DESIGN-GUIDE.md`** - AI设计规范（必读）
- **`design-system.css`** - 完整样式系统
- **`demo.html`** - 组件演示页面
- **`design-config.json`** - 机器可读配置

### 🤖 AI如何使用这个设计规范

#### 方法1：直接告诉AI仓库地址（推荐）
```
请使用ID8FUN设计规范创建组件：
仓库：https://github.com/Id8fun/AIDesign-Guidelines.git
规范文件：AI-DESIGN-GUIDE.md
```

#### 方法2：提供具体文件链接
```
请按照以下设计规范创建组件：
https://raw.githubusercontent.com/Id8fun/AIDesign-Guidelines/main/AI-DESIGN-GUIDE.md
```

#### 方法3：项目中引用CSS
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Id8fun/AIDesign-Guidelines@main/design-system.css">
```

## 🤖 如何把设计规范给AI

### 🎯 最简单的方法（复制粘贴即可）
```
请使用ID8FUN设计规范创建[组件名称]：

设计规范仓库：https://github.com/Id8fun/AIDesign-Guidelines.git
主要规范文件：AI-DESIGN-GUIDE.md

要求：严格按照规范中的CSS变量、组件结构和交互状态来创建
```

### 📋 给AI的完整提示词模板
```
系统角色：你是ID8FUN项目的专业前端开发AI助手

设计规范：
- 仓库：https://github.com/Id8fun/AIDesign-Guidelines.git  
- 规范文件：AI-DESIGN-GUIDE.md
- 配置文件：design-config.json

任务：创建 [具体组件描述]

核心要求：
1. 使用CSS变量（--primary, --secondary等）
2. 支持明暗主题切换
3. 包含动态背景和多语言支持
4. 添加完整交互状态
5. 确保响应式设计
```

### ✅ 检查AI生成的组件是否符合规范
- [ ] 使用了CSS变量而非硬编码颜色
- [ ] 包含主题切换按钮（48px×48px）
- [ ] 支持多语言切换（5种语言）
- [ ] 有动态背景效果
- [ ] 响应式布局正常

## 📁 核心文件

- **`AI-DESIGN-GUIDE.md`** - AI设计规范（必读）
- **`design-system.css`** - 完整样式系统
- **`demo.html`** - 组件演示页面
- **`design-config.json`** - 机器可读配置

## 🎯 AI使用示例

```
请按照ID8FUN设计规范创建用户卡片组件，包含：
- 用户头像、用户名和邮箱
- 操作按钮和响应式布局
```

## 📚 相关链接

- [📖 AI设计指南](./AI-DESIGN-GUIDE.md)
- [🎨 在线演示](./demo.html)
- [⚙️ 配置文件](./design-config.json)

---

## 📄 开源协议

本项目采用 [GPL-3.0](./LICENSE) 开源协议。

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个设计系统！

---

**🎉 现在AI可以通过此仓库自动获取并应用ID8FUN设计规范了！**