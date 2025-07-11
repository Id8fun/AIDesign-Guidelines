<div align="right">
  <button onclick="switchLanguage('zh')" style="margin-right: 8px; padding: 4px 8px; border: 1px solid #ccc; background: #f5f5f5; cursor: pointer;">中文</button>
  <button onclick="switchLanguage('en')" style="padding: 4px 8px; border: 1px solid #ccc; background: #f5f5f5; cursor: pointer;">English</button>
</div>

<div id="content-zh" class="language-content">

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

</div>

<div id="content-en" class="language-content" style="display: none;">

# ID8FUN Design System

![ID8FUN AI Design System](img/AI%20Design.png)

> Intelligent design specification system designed specifically for AI programming assistants

## 🔥 Quick Start (30 seconds)

**Want AI to create components according to ID8FUN specifications? Just copy this to AI:**

```
Please create [component name] using ID8FUN design specifications:
Design specs: https://github.com/Id8fun/AIDesign-Guidelines.git
Spec file: AI-DESIGN-GUIDE.md
Requirements: Strictly follow specs including theme switching, multi-language, responsive design
```

**That's it! AI will automatically fetch the specs and generate standard-compliant components.**

## 🚀 Getting Started

```bash
# Clone repository
git clone https://github.com/Id8fun/AIDesign-Guidelines.git
cd AIDesign-Guidelines

# Or as submodule
git submodule add https://github.com/Id8fun/AIDesign-Guidelines.git design-system
```

### Core Files
- **`AI-DESIGN-GUIDE.md`** - AI Design Specifications (Must Read)
- **`design-system.css`** - Complete Style System
- **`demo.html`** - Component Demo Page
- **`design-config.json`** - Machine-readable Configuration

### 🤖 How AI Uses This Design System

#### Method 1: Direct Repository URL (Recommended)
```
Please create components using ID8FUN design specifications:
Repository: https://github.com/Id8fun/AIDesign-Guidelines.git
Spec file: AI-DESIGN-GUIDE.md
```

#### Method 2: Provide Specific File Links
```
Please create components according to these design specifications:
https://raw.githubusercontent.com/Id8fun/AIDesign-Guidelines/main/AI-DESIGN-GUIDE.md
```

#### Method 3: Reference CSS in Project
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Id8fun/AIDesign-Guidelines@main/design-system.css">
```

## 🤖 How to Provide Design Specs to AI

### 🎯 Simplest Method (Copy & Paste)
```
Please create [component name] using ID8FUN design specifications:

Design spec repository: https://github.com/Id8fun/AIDesign-Guidelines.git
Main spec file: AI-DESIGN-GUIDE.md

Requirements: Strictly follow CSS variables, component structure and interaction states in the specs
```

### 📋 Complete Prompt Template for AI
```
System Role: You are a professional frontend development AI assistant for ID8FUN project

Design Specifications:
- Repository: https://github.com/Id8fun/AIDesign-Guidelines.git  
- Spec file: AI-DESIGN-GUIDE.md
- Config file: design-config.json

Task: Create [specific component description]

Core Requirements:
1. Use CSS variables (--primary, --secondary, etc.)
2. Support light/dark theme switching
3. Include dynamic background and multi-language support
4. Add complete interaction states
5. Ensure responsive design
```

### ✅ Check if AI-generated Components Meet Specifications
- [ ] Uses CSS variables instead of hardcoded colors
- [ ] Includes theme toggle button (48px×48px)
- [ ] Supports multi-language switching (5 languages)
- [ ] Has dynamic background effects
- [ ] Responsive layout works properly

## 📁 Core Files

- **`AI-DESIGN-GUIDE.md`** - AI Design Specifications (Must Read)
- **`design-system.css`** - Complete Style System
- **`demo.html`** - Component Demo Page
- **`design-config.json`** - Machine-readable Configuration

## 🎯 AI Usage Example

```
Please create a user card component according to ID8FUN design specifications, including:
- User avatar, username and email
- Action buttons and responsive layout
```

## 📚 Related Links

- [📖 AI Design Guide](./AI-DESIGN-GUIDE.md)
- [🎨 Live Demo](./demo.html)
- [⚙️ Configuration File](./design-config.json)

---

## 📄 Open Source License

This project is licensed under [GPL-3.0](./LICENSE).

## 🤝 Contributing

Welcome to submit Issues and Pull Requests to improve this design system!

---

**🎉 Now AI can automatically fetch and apply ID8FUN design specifications through this repository!**

</div>

<script>
function switchLanguage(lang) {
  const zhContent = document.getElementById('content-zh');
  const enContent = document.getElementById('content-en');
  
  if (lang === 'zh') {
    zhContent.style.display = 'block';
    enContent.style.display = 'none';
  } else {
    zhContent.style.display = 'none';
    enContent.style.display = 'block';
  }
}
</script>

<style>
.language-content {
  margin-top: 20px;
}
</style>