# ID8FUN AI 设计规范指南

> 本文档专为AI编程助手设计，提供结构化的设计规范，确保AI能够自动按照统一标准生成UI组件和样式。

## 📦 GitHub 集成说明

### 仓库结构要求
当你将此项目上传到GitHub时，请确保以下文件结构：
```
project-root/
├── AI-DESIGN-GUIDE.md     # AI设计规范（本文件）
├── design-system.css      # 完整CSS样式
├── demo.html             # 组件演示
├── ui-design-system.md   # 详细设计文档
└── design-config.json    # 机器可读配置
```

### AI 获取规范的方法
1. **直接引用文件**：AI可以通过以下路径获取设计规范
   - 主要规范：`/AI-DESIGN-GUIDE.md`
   - CSS样式：`/design-system.css`
   - 配置文件：`/design-config.json`

2. **使用提示词**：在AI编程时使用以下提示词
   ```
   请参考项目根目录的AI-DESIGN-GUIDE.md文件，按照ID8FUN设计规范创建组件
   ```

3. **JSON配置文件**：AI可以解析 `design-config.json` 获取结构化配置
   - 组件模板和类名定义
   - 颜色变量和使用规则
   - 布局和交互规范

### 自动化集成方案

#### 方案一：项目初始化时引用
```bash
# 克隆设计规范仓库
git clone https://github.com/your-username/id8fun-design-system.git

# 在新项目中引用设计规范
cp id8fun-design-system/AI-DESIGN-GUIDE.md ./
cp id8fun-design-system/design-config.json ./
cp id8fun-design-system/design-system.css ./assets/
```

#### 方案二：AI提示词模板
```
系统提示：你现在需要为ID8FUN项目开发UI组件。请严格遵循以下设计规范：

1. 从项目根目录读取 AI-DESIGN-GUIDE.md 和 design-config.json
2. 使用预定义的CSS变量和类名
3. 确保组件具有响应式设计和交互状态
4. 遵循颜色、字体和布局规范

现在请创建：[具体组件需求]
```

#### 方案三：GitHub Actions 自动同步
创建 `.github/workflows/sync-design-system.yml`：
```yaml
name: Sync Design System
on:
  schedule:
    - cron: '0 0 * * 0'  # 每周同步一次
  workflow_dispatch:

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Download latest design system
        run: |
          curl -O https://raw.githubusercontent.com/your-username/id8fun-design-system/main/AI-DESIGN-GUIDE.md
          curl -O https://raw.githubusercontent.com/your-username/id8fun-design-system/main/design-config.json
```

## 🤖 AI 使用说明

当你需要为ID8FUN项目创建UI组件时，请严格遵循以下规范：

### 必须使用的CSS变量
```css
/* 颜色系统 - 必须使用这些CSS变量 */
--primary: 0 0% 9%;           /* 主要按钮、链接 */
--primary-foreground: 0 0% 98%;
--secondary: 0 0% 96.1%;      /* 次要按钮 */
--secondary-foreground: 0 0% 9%;
--background: 0 0% 100%;      /* 页面背景 */
--foreground: 0 0% 3.9%;      /* 主要文字 */
--muted-foreground: 0 0% 45.1%; /* 次要文字 */
--destructive: 0 84.2% 60.2%; /* 危险操作 */
--border: 0 0% 89.8%;         /* 边框 */
--radius: 0.5rem;             /* 圆角 */
```

### 组件生成规则

#### 1. 按钮组件
```html
<!-- 主要按钮 -->
<button class="btn btn-primary btn-default">按钮文字</button>

<!-- 次要按钮 -->
<button class="btn btn-secondary btn-default">按钮文字</button>

<!-- 危险按钮 -->
<button class="btn btn-destructive btn-default">删除</button>

<!-- 轮廓按钮 -->
<button class="btn btn-outline btn-default">按钮文字</button>
```

#### 2. 卡片组件
```html
<div class="card">
    <div class="card-header">
        <h3 class="card-title">标题</h3>
        <p class="card-description">描述文字</p>
    </div>
    <div class="card-content">
        <!-- 内容区域 -->
    </div>
    <div class="card-footer">
        <!-- 操作按钮 -->
    </div>
</div>
```

#### 3. 输入框组件
```html
<div class="space-y-2">
    <label class="label">标签文字</label>
    <input class="input" type="text" placeholder="请输入...">
</div>
```

#### 4. 提示组件
```html
<!-- 信息提示 -->
<div class="alert">
    <div class="alert-title">ℹ️ 信息提示</div>
    <div class="alert-description">提示内容</div>
</div>

<!-- 错误提示 -->
<div class="alert alert-destructive">
    <div class="alert-title">❌ 错误提示</div>
    <div class="alert-description">错误内容</div>
</div>
```

### 布局规则

#### 间距系统
- 使用 `space-y-2`, `space-y-4`, `space-y-6` 控制垂直间距
- 使用 `gap-2`, `gap-4`, `gap-6` 控制网格间距
- 使用 `p-4`, `p-6`, `m-4`, `m-6` 控制内外边距

#### 响应式布局
```html
<!-- 网格布局 -->
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- 卡片内容 -->
</div>

<!-- 弹性布局 -->
<div class="flex flex-col md:flex-row gap-4">
    <!-- 内容 -->
</div>
```

### 颜色使用规则

#### 文字颜色
- 主要文字：`text-foreground`
- 次要文字：`text-muted-foreground`
- 链接文字：`text-primary`

#### 背景颜色
- 页面背景：`bg-background`
- 卡片背景：`bg-card`
- 主要按钮：`bg-primary`
- 次要按钮：`bg-secondary`

### 字体规则

#### 标题层级
- H1: `text-4xl font-bold` (页面主标题)
- H2: `text-3xl font-semibold` (章节标题)
- H3: `text-2xl font-semibold` (子标题)
- H4: `text-xl font-medium` (小标题)

#### 正文字体
- 大号正文: `text-lg`
- 标准正文: `text-base`
- 小号正文: `text-sm`
- 说明文字: `text-xs text-muted-foreground`

### 交互状态

#### 悬停效果
- 按钮悬停：`hover:bg-primary/90`
- 卡片悬停：`hover:shadow-md transition-shadow`
- 链接悬停：`hover:underline`

#### 焦点状态
- 输入框焦点：`focus:ring-2 focus:ring-primary`
- 按钮焦点：`focus:outline-none focus:ring-2 focus:ring-primary`

### 动画效果

#### 过渡动画
```css
/* 标准过渡 */
transition: all 0.2s ease-in-out;

/* 悬停变换 */
transform: translateY(-2px);
```

#### 加载状态
```html
<button class="btn btn-primary btn-default" disabled>
    <span class="animate-spin">⏳</span>
    加载中...
</button>
```

## 🎯 AI 生成指令

### 创建新组件时
1. **必须**使用上述CSS类名和变量
2. **必须**遵循颜色和字体规则
3. **必须**包含响应式设计
4. **必须**添加适当的交互状态
5. **必须**使用语义化的HTML结构

### 示例提示词
```
请按照ID8FUN设计规范创建一个用户卡片组件，包含：
- 用户头像
- 用户名和邮箱
- 操作按钮
- 响应式布局
```

### 禁止事项
❌ 不要使用自定义颜色值（如 #ff0000）
❌ 不要使用内联样式
❌ 不要忽略响应式设计
❌ 不要使用非标准的类名
❌ 不要忽略可访问性

## 📋 检查清单

生成组件后，请确认：
- [ ] 使用了正确的CSS变量
- [ ] 遵循了颜色规范
- [ ] 包含了响应式类名
- [ ] 添加了交互状态
- [ ] 使用了语义化HTML
- [ ] 符合可访问性标准

## 🔗 相关文件

- `design-system.css` - 完整的CSS样式定义
- `demo.html` - 组件演示页面
- `ui-design-system.md` - 详细设计文档

---

**重要提醒**：这是ID8FUN的核心设计规范，所有AI生成的组件都必须严格遵循此规范，确保视觉一致性和用户体验。