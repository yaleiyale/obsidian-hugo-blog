# hugo+obsidian的个人博客搭建

![image](https://user-images.githubusercontent.com/55282569/211509250-51c45d7c-bfe1-428b-a44c-76caebdb774c.png)

特性：
- 基础markdown渲染
- 支持引用与标注
- 支持表格
- 支持mermaid
- 支持LaTeX
- 双向链接
- 文件链接预览
- 脚注
- 大纲
- 标签归档
- 全局图谱
- Excalidraw.md绘图展示
- 支持Dataview插件
- 图片浮窗查看
- 代码一键复制
- 移动端适配，自适应布局
- 屏蔽QQ微信内打开（防举报）  
……

准备阶段：
- clone本仓库到本地
- 用obsidian打开笔记库（默认为note文件夹）

预先配置：
- 博客的配置项大部分在config.toml文件中。
- 需要修改页面主题时，在`theme/atlas`文件夹下进行模板编写。
- 自定义域名时，需在根目录的static文件夹下写入名为`CNAME`的文件，文件内写入你的域名。
- github action中需要使用到github的token，需要在github中预先配置具有repo权限的相应token。

使用体验：
- 可以依照个人习惯使用obsidian进行笔记文章的书写。
- 模板可帮助你进行特定形式的插入与书写效率的提升（默认快捷键为`alt+t`），建议在书写新页时，首先插入基础模板。
- 使用`ctrl+s`会进行文本和front matter的格式化，完成一页的书写前，务必至少进行过一次格式化以保证front matter的正确。
- 准备进行推送时，默认输入`alt+s`,会生成content文件夹下的博客用内容库。dataview会转为表格而在博客中可用。
- 使用git将整个仓库推送到github，github action将自动工作生成你的博客

生成效果：

![image](https://user-images.githubusercontent.com/55282569/211508252-eb31ef84-dad0-40d9-b0a2-b3329ea6d5f5.png)
![image](https://user-images.githubusercontent.com/55282569/211508329-ef670e2e-4263-4b23-9c0b-6276c0963b0d.png)
![image](https://user-images.githubusercontent.com/55282569/211508647-acffa5a1-827e-416e-b821-dcfedd29f118.png)
![image](https://user-images.githubusercontent.com/55282569/211508823-96f25e42-c5ef-4ff2-a39c-a6e0af2fa24b.png)

