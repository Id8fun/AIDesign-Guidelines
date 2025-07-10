# ID8FUN 项目 UI 设计规范

## 概述

本文档定义了 ID8FUN 项目的完整 UI 设计规范，包括颜色系统、字体规范、组件样式、动效交互等，用于确保项目视觉风格的一致性。

## 设计系统基础

### 框架与工具
- **UI 框架**: Shadcn/ui + Radix UI
- **样式系统**: Tailwind CSS
- **图标库**: Lucide React
- **动画库**: Tailwind CSS Animate
- **主题系统**: next-themes (支持明暗主题切换)

## 颜色系统

### 主色调 (Primary Colors)

#### 亮色主题
```css
--primary: 0 0% 9%;           /* 主要按钮、链接 */
--primary-foreground: 0 0% 98%; /* 主色上的文字 */
```

#### 暗色主题
```css
--primary: 0 0% 98%;          /* 主要按钮、链接 */
--primary-foreground: 0 0% 9%; /* 主色上的文字 */
```

### 背景色系统

#### 亮色主题
```css
--background: 0 0% 100%;      /* 页面背景 */
--foreground: 0 0% 3.9%;      /* 主要文字颜色 */
--card: 0 0% 100%;            /* 卡片背景 */
--card-foreground: 0 0% 3.9%; /* 卡片文字 */
```

#### 暗色主题
```css
--background: 0 0% 3.9%;      /* 页面背景 */
--foreground: 0 0% 98%;       /* 主要文字颜色 */
--card: 0 0% 3.9%;            /* 卡片背景 */
--card-foreground: 0 0% 98%;  /* 卡片文字 */
```

### 功能色彩

#### 次要色 (Secondary)
```css
/* 亮色主题 */
--secondary: 0 0% 96.1%;      /* 次要按钮背景 */
--secondary-foreground: 0 0% 9%; /* 次要按钮文字 */

/* 暗色主题 */
--secondary: 0 0% 14.9%;      /* 次要按钮背景 */
--secondary-foreground: 0 0% 98%; /* 次要按钮文字 */
```

#### 强调色 (Accent)
```css
/* 亮色主题 */
--accent: 0 0% 96.1%;         /* 悬停状态背景 */
--accent-foreground: 0 0% 9%; /* 悬停状态文字 */

/* 暗色主题 */
--accent: 0 0% 14.9%;         /* 悬停状态背景 */
--accent-foreground: 0 0% 98%; /* 悬停状态文字 */
```

#### 静音色 (Muted)
```css
/* 亮色主题 */
--muted: 0 0% 96.1%;          /* 禁用状态背景 */
--muted-foreground: 0 0% 45.1%; /* 次要文字、说明文字 */

/* 暗色主题 */
--muted: 0 0% 14.9%;          /* 禁用状态背景 */
--muted-foreground: 0 0% 63.9%; /* 次要文字、说明文字 */
```

#### 危险色 (Destructive)
```css
/* 亮色主题 */
--destructive: 0 84.2% 60.2%; /* 删除、错误按钮 */
--destructive-foreground: 0 0% 98%; /* 危险按钮文字 */

/* 暗色主题 */
--destructive: 0 62.8% 30.6%; /* 删除、错误按钮 */
--destructive-foreground: 0 0% 98%; /* 危险按钮文字 */
```

### 边框与输入框
```css
/* 亮色主题 */
--border: 0 0% 89.8%;         /* 边框颜色 */
--input: 0 0% 89.8%;          /* 输入框边框 */
--ring: 0 0% 3.9%;            /* 焦点环颜色 */

/* 暗色主题 */
--border: 0 0% 14.9%;         /* 边框颜色 */
--input: 0 0% 14.9%;          /* 输入框边框 */
--ring: 0 0% 83.1%;           /* 焦点环颜色 */
```

### 图表色彩
```css
/* 亮色主题 */
--chart-1: 12 76% 61%;        /* 图表颜色1 */
--chart-2: 173 58% 39%;       /* 图表颜色2 */
--chart-3: 197 37% 24%;       /* 图表颜色3 */
--chart-4: 43 74% 66%;        /* 图表颜色4 */
--chart-5: 27 87% 67%;        /* 图表颜色5 */

/* 暗色主题 */
--chart-1: 220 70% 50%;       /* 图表颜色1 */
--chart-2: 160 60% 45%;       /* 图表颜色2 */
--chart-3: 30 80% 55%;        /* 图表颜色3 */
--chart-4: 280 65% 60%;       /* 图表颜色4 */
--chart-5: 340 75% 55%;       /* 图表颜色5 */
```

### 动态渐变背景色彩
```css
--color-bg1: rgb(108, 0, 162); /* 渐变背景色1 - 紫色 */
--color-bg2: rgb(0, 17, 82);   /* 渐变背景色2 - 深蓝 */
--color1: 18, 113, 255;        /* 动态圆形1 - 蓝色 */
--color2: 221, 74, 255;        /* 动态圆形2 - 紫色 */
--color3: 100, 220, 255;       /* 动态圆形3 - 青色 */
--color4: 200, 50, 50;         /* 动态圆形4 - 红色 */
--color5: 180, 180, 50;        /* 动态圆形5 - 黄色 */
--color-interactive: 140, 100, 255; /* 交互色 - 紫色 */
```

## 字体系统

### 字体族
```css
body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Tailwind 扩展字体 */
font-sans: ["var(--font-sans)", ...fontFamily.sans]
```

### 字体大小规范

#### 标题字体
- **H1**: `text-4xl` (36px) - 页面主标题
- **H2**: `text-3xl` (30px) - 章节标题
- **H3**: `text-2xl` (24px) - 子章节标题
- **H4**: `text-xl` (20px) - 小标题
- **H5**: `text-lg` (18px) - 次级标题
- **H6**: `text-base` (16px) - 基础标题

#### 正文字体
- **大号正文**: `text-lg` (18px) - 重要内容
- **标准正文**: `text-base` (16px) - 常规内容
- **小号正文**: `text-sm` (14px) - 次要信息
- **说明文字**: `text-xs` (12px) - 标签、说明

#### 字重规范
- **超粗**: `font-black` (900) - 特殊强调
- **粗体**: `font-bold` (700) - 标题、重要信息
- **半粗**: `font-semibold` (600) - 次级标题
- **中等**: `font-medium` (500) - 按钮文字
- **常规**: `font-normal` (400) - 正文
- **细体**: `font-light` (300) - 次要信息

## 圆角系统

```css
--radius: 0.5rem; /* 基础圆角 8px */
```

### 圆角规范
- **大圆角**: `rounded-lg` (var(--radius)) - 8px
- **中圆角**: `rounded-md` (calc(var(--radius) - 2px)) - 6px
- **小圆角**: `rounded-sm` (calc(var(--radius) - 4px)) - 4px
- **完全圆角**: `rounded-full` - 50%
- **无圆角**: `rounded-none` - 0px

## 按钮系统

### 按钮变体

#### 主要按钮 (Primary)
```css
default: "bg-primary text-primary-foreground hover:bg-primary/90"
```
- 背景: 主色
- 文字: 主色前景色
- 悬停: 主色透明度90%

#### 次要按钮 (Secondary)
```css
secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
```
- 背景: 次要色
- 文字: 次要色前景色
- 悬停: 次要色透明度80%

#### 轮廓按钮 (Outline)
```css
outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
```
- 背景: 透明
- 边框: 输入框边框色
- 悬停: 强调色背景

#### 幽灵按钮 (Ghost)
```css
ghost: "hover:bg-accent hover:text-accent-foreground"
```
- 背景: 透明
- 悬停: 强调色背景

#### 危险按钮 (Destructive)
```css
destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90"
```
- 背景: 危险色
- 文字: 危险色前景色
- 悬停: 危险色透明度90%

#### 链接按钮 (Link)
```css
link: "text-primary underline-offset-4 hover:underline"
```
- 颜色: 主色
- 装饰: 悬停时下划线

### 按钮尺寸

#### 默认尺寸
```css
default: "h-10 px-4 py-2" /* 高度40px，水平内边距16px，垂直内边距8px */
```

#### 小尺寸
```css
sm: "h-9 rounded-md px-3" /* 高度36px，水平内边距12px */
```

#### 大尺寸
```css
lg: "h-11 rounded-md px-8" /* 高度44px，水平内边距32px */
```

#### 图标按钮
```css
icon: "h-10 w-10" /* 正方形40x40px */
```

### 按钮基础样式
```css
"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
```

## 卡片系统

### 卡片基础样式
```css
"rounded-lg border bg-card text-card-foreground shadow-sm"
```
- 圆角: 大圆角 (8px)
- 边框: 边框色
- 背景: 卡片背景色
- 阴影: 小阴影

### 卡片组件结构
- **CardHeader**: `"flex flex-col space-y-1.5 p-6"` - 头部区域
- **CardTitle**: `"text-2xl font-semibold leading-none tracking-tight"` - 标题
- **CardDescription**: `"text-sm text-muted-foreground"` - 描述文字
- **CardContent**: `"p-6 pt-0"` - 内容区域
- **CardFooter**: `"flex items-center p-6 pt-0"` - 底部区域

## 动效系统

### 过渡动画
```css
transition-colors /* 颜色过渡 */
```

### 手风琴动画
```css
@keyframes accordion-down {
  from { height: "0" }
  to { height: "var(--radix-accordion-content-height)" }
}

@keyframes accordion-up {
  from { height: "var(--radix-accordion-content-height)" }
  to { height: "0" }
}

animation: {
  "accordion-down": "accordion-down 0.2s ease-out",
  "accordion-up": "accordion-up 0.2s ease-out",
}
```

### 动态背景动画

#### 圆形移动动画
```css
@keyframes moveInCircle {
  0% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
}
```

#### 垂直移动动画
```css
@keyframes moveVertical {
  0% { transform: translateY(-50%); }
  50% { transform: translateY(50%); }
  100% { transform: translateY(-50%); }
}
```

#### 水平移动动画
```css
@keyframes moveHorizontal {
  0% { transform: translateX(-50%) translateY(-10%); }
  50% { transform: translateX(50%) translateY(10%); }
  100% { transform: translateX(-50%) translateY(-10%); }
}
```

### 动画时长规范
- **快速**: 0.1s - 0.2s (按钮悬停、焦点状态)
- **标准**: 0.2s - 0.3s (页面过渡、组件展开)
- **慢速**: 0.3s - 0.5s (复杂动画、页面切换)
- **背景动画**: 20s - 40s (装饰性动画)

### 缓动函数
- **ease-out**: 快速开始，缓慢结束
- **ease-in**: 缓慢开始，快速结束
- **ease**: 标准缓动
- **linear**: 线性动画

## 交互状态

### 悬停状态 (Hover)
- 按钮: 背景色透明度变化
- 链接: 下划线出现
- 卡片: 轻微阴影增强

### 焦点状态 (Focus)
```css
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
```
- 轮廓: 无
- 焦点环: 2px 环形边框
- 偏移: 2px

### 禁用状态 (Disabled)
```css
disabled:pointer-events-none disabled:opacity-50
```
- 鼠标事件: 禁用
- 透明度: 50%

### 活跃状态 (Active)
- 按钮: 轻微缩放或颜色加深
- 链接: 颜色变化

## 阴影系统

### 阴影级别
- **无阴影**: `shadow-none`
- **小阴影**: `shadow-sm` - 卡片、按钮
- **标准阴影**: `shadow` - 弹窗、下拉菜单
- **中等阴影**: `shadow-md` - 悬浮元素
- **大阴影**: `shadow-lg` - 模态框
- **超大阴影**: `shadow-xl` - 重要弹窗

## 间距系统

### 内边距 (Padding)
- **xs**: `p-1` (4px)
- **sm**: `p-2` (8px)
- **md**: `p-4` (16px)
- **lg**: `p-6` (24px)
- **xl**: `p-8` (32px)

### 外边距 (Margin)
- **xs**: `m-1` (4px)
- **sm**: `m-2` (8px)
- **md**: `m-4` (16px)
- **lg**: `m-6` (24px)
- **xl**: `m-8` (32px)

### 间隙 (Gap)
- **xs**: `gap-1` (4px)
- **sm**: `gap-2` (8px)
- **md**: `gap-4` (16px)
- **lg**: `gap-6` (24px)
- **xl**: `gap-8` (32px)

## 响应式设计

### 断点系统
- **sm**: 640px 及以上
- **md**: 768px 及以上
- **lg**: 1024px 及以上
- **xl**: 1280px 及以上
- **2xl**: 1536px 及以上

### 响应式原则
1. 移动优先设计
2. 渐进增强
3. 内容优先
4. 触摸友好

## 可访问性规范

### 颜色对比度
- 正文文字: 至少 4.5:1
- 大号文字: 至少 3:1
- 非文字元素: 至少 3:1

### 焦点管理
- 键盘导航支持
- 明显的焦点指示器
- 逻辑的Tab顺序

### 语义化标记
- 正确使用HTML语义标签
- ARIA属性支持
- 屏幕阅读器友好

## 使用指南

### CSS变量使用
```css
/* 使用HSL颜色变量 */
background-color: hsl(var(--primary));
color: hsl(var(--primary-foreground));
```

### Tailwind类名使用
```html
<!-- 主要按钮 -->
<button class="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md">
  主要按钮
</button>

<!-- 卡片组件 -->
<div class="rounded-lg border bg-card text-card-foreground shadow-sm">
  <div class="flex flex-col space-y-1.5 p-6">
    <h3 class="text-2xl font-semibold leading-none tracking-tight">卡片标题</h3>
    <p class="text-sm text-muted-foreground">卡片描述</p>
  </div>
  <div class="p-6 pt-0">
    卡片内容
  </div>
</div>
```

### 主题切换
```tsx
import { useTheme } from "next-themes"

const { theme, setTheme } = useTheme()

// 切换到暗色主题
setTheme("dark")

// 切换到亮色主题
setTheme("light")

// 跟随系统主题
setTheme("system")
```

## 组件库集成

### Shadcn/ui 组件
- 基于 Radix UI 构建
- 完全可定制
- TypeScript 支持
- 无运行时依赖

### 图标使用
```tsx
import { ChevronDown, User, Settings } from "lucide-react"

<ChevronDown className="h-4 w-4" />
```

## 最佳实践

1. **一致性**: 始终使用设计系统中定义的颜色、字体、间距
2. **可维护性**: 使用CSS变量和Tailwind类名，避免硬编码样式
3. **性能**: 合理使用动画，避免过度动效
4. **可访问性**: 确保足够的颜色对比度和键盘导航支持
5. **响应式**: 优先考虑移动端体验
6. **主题支持**: 确保所有组件在明暗主题下都能正常显示

---

*本设计规范基于 ID8FUN 项目的实际代码分析生成，适用于 Next.js + Tailwind CSS + Shadcn/ui 技术栈。*