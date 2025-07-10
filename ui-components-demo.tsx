/**
 * ID8FUN UI 组件设计规范实例 Demo
 * 
 * 本文件展示了项目中所有UI组件的使用示例，包括：
 * - 颜色系统展示
 * - 按钮组件变体
 * - 卡片组件样式
 * - 字体系统展示
 * - 动效交互演示
 * - 响应式布局示例
 * 
 * 使用方式：将此文件复制到你的项目中，作为UI组件参考
 */

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  ChevronRight, 
  Download, 
  Upload, 
  Settings, 
  User, 
  Heart, 
  Star, 
  AlertCircle, 
  CheckCircle, 
  Info,
  Trash2,
  Edit,
  Copy
} from 'lucide-react'
import { useTheme } from 'next-themes'

const UIComponentsDemo: React.FC = () => {
  const [progress, setProgress] = useState(65)
  const [isLoading, setIsLoading] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleAsyncAction = async () => {
    setIsLoading(true)
    // 模拟异步操作
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 动态渐变背景 */}
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto p-6 space-y-8">
        {/* 页面标题 */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">ID8FUN UI 设计规范</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            完整的UI组件库展示，包含所有设计元素和交互状态
          </p>
        </div>

        {/* 主题切换器 */}
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              主题设置
            </CardTitle>
            <CardDescription>
              切换明暗主题查看不同的视觉效果
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Label htmlFor="theme-switch">暗色主题</Label>
              <Switch 
                id="theme-switch"
                checked={theme === 'dark'}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              />
            </div>
          </CardContent>
        </Card>

        {/* 颜色系统展示 */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">颜色系统</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 主色调 */}
            <Card>
              <CardHeader>
                <CardTitle>主色调 (Primary)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="h-16 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-medium">Primary</span>
                  </div>
                  <p className="text-sm text-muted-foreground">主要按钮、链接颜色</p>
                </div>
              </CardContent>
            </Card>

            {/* 次要色 */}
            <Card>
              <CardHeader>
                <CardTitle>次要色 (Secondary)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="h-16 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-secondary-foreground font-medium">Secondary</span>
                  </div>
                  <p className="text-sm text-muted-foreground">次要按钮、背景色</p>
                </div>
              </CardContent>
            </Card>

            {/* 强调色 */}
            <Card>
              <CardHeader>
                <CardTitle>强调色 (Accent)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="h-16 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-medium">Accent</span>
                  </div>
                  <p className="text-sm text-muted-foreground">悬停状态、强调元素</p>
                </div>
              </CardContent>
            </Card>

            {/* 静音色 */}
            <Card>
              <CardHeader>
                <CardTitle>静音色 (Muted)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="h-16 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-medium">Muted</span>
                  </div>
                  <p className="text-sm text-muted-foreground">禁用状态、次要信息</p>
                </div>
              </CardContent>
            </Card>

            {/* 危险色 */}
            <Card>
              <CardHeader>
                <CardTitle>危险色 (Destructive)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="h-16 bg-destructive rounded-lg flex items-center justify-center">
                    <span className="text-destructive-foreground font-medium">Destructive</span>
                  </div>
                  <p className="text-sm text-muted-foreground">错误、删除操作</p>
                </div>
              </CardContent>
            </Card>

            {/* 图表色彩 */}
            <Card>
              <CardHeader>
                <CardTitle>图表色彩</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-2">
                  <div className="h-8 bg-chart-1 rounded"></div>
                  <div className="h-8 bg-chart-2 rounded"></div>
                  <div className="h-8 bg-chart-3 rounded"></div>
                  <div className="h-8 bg-chart-4 rounded"></div>
                  <div className="h-8 bg-chart-5 rounded"></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">数据可视化配色</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 按钮系统 */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">按钮系统</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 按钮变体 */}
            <Card>
              <CardHeader>
                <CardTitle>按钮变体</CardTitle>
                <CardDescription>不同用途的按钮样式</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="default">
                    <Download className="h-4 w-4" />
                    主要按钮
                  </Button>
                  <Button variant="secondary">
                    <Upload className="h-4 w-4" />
                    次要按钮
                  </Button>
                  <Button variant="outline">
                    <Edit className="h-4 w-4" />
                    轮廓按钮
                  </Button>
                  <Button variant="ghost">
                    <Copy className="h-4 w-4" />
                    幽灵按钮
                  </Button>
                  <Button variant="destructive">
                    <Trash2 className="h-4 w-4" />
                    危险按钮
                  </Button>
                  <Button variant="link">
                    链接按钮
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 按钮尺寸 */}
            <Card>
              <CardHeader>
                <CardTitle>按钮尺寸</CardTitle>
                <CardDescription>不同场景的按钮大小</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">小按钮</Button>
                  <Button size="default">默认按钮</Button>
                  <Button size="lg">大按钮</Button>
                  <Button size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 按钮状态 */}
            <Card>
              <CardHeader>
                <CardTitle>按钮状态</CardTitle>
                <CardDescription>不同交互状态的按钮</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button>正常状态</Button>
                  <Button disabled>禁用状态</Button>
                  <Button 
                    onClick={handleAsyncAction}
                    disabled={isLoading}
                  >
                    {isLoading ? '加载中...' : '异步操作'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 图标按钮组合 */}
            <Card>
              <CardHeader>
                <CardTitle>图标按钮组合</CardTitle>
                <CardDescription>图标与文字的组合使用</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button>
                    <Heart className="h-4 w-4" />
                    收藏
                  </Button>
                  <Button variant="outline">
                    分享
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary">
                    <Star className="h-4 w-4" />
                    点赞
                    <Badge variant="secondary" className="ml-2">99+</Badge>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 卡片系统 */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">卡片系统</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 基础卡片 */}
            <Card>
              <CardHeader>
                <CardTitle>基础卡片</CardTitle>
                <CardDescription>
                  这是一个标准的卡片组件，包含标题、描述和内容区域。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  卡片内容区域可以放置任何类型的内容，如文本、图片、表单等。
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  操作按钮
                </Button>
              </CardFooter>
            </Card>

            {/* 用户信息卡片 */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" alt="用户头像" />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">张三</CardTitle>
                    <CardDescription>前端开发工程师</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">项目完成度</span>
                    <span className="font-medium">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              </CardContent>
              <CardFooter className="space-x-2">
                <Button variant="outline" size="sm">
                  查看详情
                </Button>
                <Button size="sm">
                  发送消息
                </Button>
              </CardFooter>
            </Card>

            {/* 统计卡片 */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  总下载量
                </CardTitle>
                <Download className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,345</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+20.1%</span> 较上月
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 字体系统 */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">字体系统</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>字体层级与样式</CardTitle>
              <CardDescription>项目中使用的字体大小和样式规范</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 标题字体 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">标题字体</h3>
                <div className="space-y-3">
                  <h1 className="text-4xl font-bold">H1 - 页面主标题 (36px)</h1>
                  <h2 className="text-3xl font-semibold">H2 - 章节标题 (30px)</h2>
                  <h3 className="text-2xl font-semibold">H3 - 子章节标题 (24px)</h3>
                  <h4 className="text-xl font-semibold">H4 - 小标题 (20px)</h4>
                  <h5 className="text-lg font-semibold">H5 - 次级标题 (18px)</h5>
                  <h6 className="text-base font-semibold">H6 - 基础标题 (16px)</h6>
                </div>
              </div>

              <Separator />

              {/* 正文字体 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">正文字体</h3>
                <div className="space-y-3">
                  <p className="text-lg">大号正文 - 重要内容展示 (18px)</p>
                  <p className="text-base">标准正文 - 常规内容阅读 (16px)</p>
                  <p className="text-sm">小号正文 - 次要信息说明 (14px)</p>
                  <p className="text-xs text-muted-foreground">说明文字 - 标签和提示信息 (12px)</p>
                </div>
              </div>

              <Separator />

              {/* 字重展示 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">字重规范</h3>
                <div className="space-y-2">
                  <p className="font-light">细体 (300) - 次要信息</p>
                  <p className="font-normal">常规 (400) - 正文内容</p>
                  <p className="font-medium">中等 (500) - 按钮文字</p>
                  <p className="font-semibold">半粗 (600) - 次级标题</p>
                  <p className="font-bold">粗体 (700) - 重要信息</p>
                  <p className="font-black">超粗 (900) - 特殊强调</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 表单组件 */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">表单组件</h2>
          
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>表单示例</CardTitle>
              <CardDescription>常用的表单输入组件展示</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名</Label>
                  <Input id="name" placeholder="请输入姓名" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">邮箱</Label>
                  <Input id="email" type="email" placeholder="请输入邮箱" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">消息</Label>
                <Textarea 
                  id="message" 
                  placeholder="请输入您的消息..." 
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <Label htmlFor="notifications">接收邮件通知</Label>
              </div>
            </CardContent>
            <CardFooter className="space-x-2">
              <Button variant="outline">取消</Button>
              <Button>提交</Button>
            </CardFooter>
          </Card>
        </section>

        {/* 反馈组件 */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">反馈组件</h2>
          
          <div className="space-y-4">
            {/* 警告提示 */}
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>信息提示</AlertTitle>
              <AlertDescription>
                这是一个普通的信息提示，用于向用户传达重要信息。
              </AlertDescription>
            </Alert>

            <Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>成功提示</AlertTitle>
              <AlertDescription>
                操作已成功完成！您的文件已经成功上传并处理。
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>警告提示</AlertTitle>
              <AlertDescription>
                请注意：此操作可能会影响您的数据，请谨慎操作。
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>错误提示</AlertTitle>
              <AlertDescription>
                操作失败：文件格式不支持，请上传PDF格式的文件。
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* 标签和徽章 */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">标签和徽章</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>徽章组件</CardTitle>
              <CardDescription>用于标记状态、分类等信息</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">默认</Badge>
                <Badge variant="secondary">次要</Badge>
                <Badge variant="outline">轮廓</Badge>
                <Badge variant="destructive">危险</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-200">
                  成功
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200">
                  信息
                </Badge>
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-200">
                  警告
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 选项卡 */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">选项卡组件</h2>
          
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">概览</TabsTrigger>
                  <TabsTrigger value="analytics">分析</TabsTrigger>
                  <TabsTrigger value="settings">设置</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <h3 className="text-lg font-semibold">项目概览</h3>
                  <p className="text-muted-foreground">
                    这里显示项目的基本信息和统计数据。包括文件处理数量、用户活跃度等关键指标。
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold">1,234</div>
                      <div className="text-sm text-muted-foreground">处理文件</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold">567</div>
                      <div className="text-sm text-muted-foreground">活跃用户</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="analytics" className="space-y-4">
                  <h3 className="text-lg font-semibold">数据分析</h3>
                  <p className="text-muted-foreground">
                    详细的使用数据分析，帮助了解用户行为和系统性能。
                  </p>
                  <Progress value={75} className="w-full" />
                  <p className="text-sm text-muted-foreground">系统性能: 75%</p>
                </TabsContent>
                <TabsContent value="settings" className="space-y-4">
                  <h3 className="text-lg font-semibold">系统设置</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-save">自动保存</Label>
                      <Switch id="auto-save" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="notifications">推送通知</Label>
                      <Switch id="notifications" />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* 响应式展示 */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">响应式布局</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>响应式网格</CardTitle>
              <CardDescription>展示不同屏幕尺寸下的布局效果</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 8 }, (_, i) => (
                  <div key={i} className="p-4 border rounded-lg text-center">
                    <div className="text-lg font-semibold">项目 {i + 1}</div>
                    <div className="text-sm text-muted-foreground">响应式卡片</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 动效展示 */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">动效交互</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>悬停效果</CardTitle>
                <CardDescription>鼠标悬停时的视觉反馈</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <div className="text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm">悬停阴影</p>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                    <div className="text-center">
                      <Download className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm">悬停背景</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>加载状态</CardTitle>
                <CardDescription>异步操作的视觉反馈</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>处理进度</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    onClick={() => setProgress(Math.min(100, progress + 10))}
                  >
                    增加进度
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setProgress(Math.max(0, progress - 10))}
                  >
                    减少进度
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="text-center py-8 border-t">
          <p className="text-muted-foreground">
            ID8FUN UI 设计规范 - 基于 Shadcn/ui + Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            适用于 Next.js + TypeScript 项目
          </p>
        </footer>
      </div>
    </div>
  )
}

export default UIComponentsDemo

/**
 * 使用说明：
 * 
 * 1. 安装依赖：
 *    npm install @radix-ui/react-* class-variance-authority clsx tailwind-merge
 *    npm install lucide-react next-themes
 * 
 * 2. 配置 Tailwind CSS：
 *    确保 tailwind.config.ts 包含所有必要的颜色变量和动画
 * 
 * 3. 设置主题提供者：
 *    在 app/layout.tsx 中包装 ThemeProvider
 * 
 * 4. 导入全局样式：
 *    确保 globals.css 包含所有 CSS 变量和动画定义
 * 
 * 5. 组件使用：
 *    import UIComponentsDemo from '@/design/ui-components-demo'
 *    
 *    function App() {
 *      return <UIComponentsDemo />
 *    }
 */