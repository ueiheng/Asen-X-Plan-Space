## Sass简介
**Sass**是一款**成熟、稳定、强大**的专业级CSS扩展语言，它是一款强化CSS的辅助工具，在CSS语法的基础上增加了变量(variables)、嵌套(nestedrules)、混合(mixins)、引入(inline imports)等高级功能，让CSS更加强大与优雅。使用Sass以及Sass的**样式库**(如Compass)有助于更好地组织管理样式文件，以及更高效地开发项目。

　　Sass的优势主要包括如下几点。

　　(1) Sass完全兼容**所有版本**的CSS。

　　(2) 特性丰富，Sass拥有比其他任何CSS扩展语言更多的功能和特性。

　　(3) 技术成熟，功能强大。

　　(4) 行业认可，越来越多的人使用Sass。

　　(5) 社区庞大，大多数科技企业和成百上千名开发者为Sass提供支持。

　　(6) 有无数框架使用Sass构建，如Compass、**Bootstrap**、Bourbon和Susy。

　　此外，Sass为CSS引入了**变量**的概念。在Sass中编写样式代码时，可以把反复使用的CSS属性值定义成一个变量，这样就不需重复地书写此属性值，在使用此属性值时只需通过变量名在不同的代码位置来引用它。或者，对于仅使用过一次的属性值，可以赋予其一个**易懂**的变量名，让人很**直观**地看出这个属性值的用途。
  
## 一、如何Vscode中使用sass
1. 在Vscode扩展中搜索`live sass Compiler`并下载安装

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a302f884a091470698c672ee57c68ceb~tplv-k3u1fbpfcp-watermark.image?)

2.**下载完成后即可写sass代码**

新建文件，更名为`demo.sass` 或`demo.scss` 两种后缀皆可，都是sass语言

3.**Sass的两种文件形式**
- sass
- scss

两种文件后缀对应两种代码书写风格<br>
例如：我们在content盒子下的`span`标签添加字体颜色属性`red`.

由图：**sass**中需要这样书写代码：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a9237c1163949ca87ca5adb0beac487~tplv-k3u1fbpfcp-watermark.image?)

而**scss**文件后缀的文件代码需要这样书写:

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b0a88f51f2e74754b48ae51059228b85~tplv-k3u1fbpfcp-watermark.image?)

- 我们可以清楚的看到，sass后缀文件，不需要书写分号（;）和花括号（{}）.

- 而scss后缀文件中，我们必须书写分号和花括号
> scss和sass两种文件形式都可以正常使用，
><br>由你自己的代码书写习惯来决定使用哪种文件后缀名！
><br>下文将以scss文件来进行讲解sass技术的各种知识。

4.**自动生成.css文件**

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ecf18f39fb5a440c926fd7a431aa7c16~tplv-k3u1fbpfcp-watermark.image?)

我们写完sass或者scss文件后，会自动生成`.css`文件与`.css.map`文件<br>
其中`.map `文件指映射,sass生成的是css,在浏览器里不方便调试(无法对应到sass源码),  `.map`就是css和sass的映射,为了方便**调试**用的一种技术”,我们暂时不需要处理。
其次，.css文件就是sass**预编译**生成的css文件，也是我们所需要得到的文件。
<br><br><br>

## 二、sass变量的使用方法
sass变量以`$`开头
<br>如：`$content-color:red;`
<br>`$content-font-size:32px;`
<br>我们可以用这种格式来定义变量并存储值。
<br>例如：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/561aa4ce3e094a3aa453d441183dcadf~tplv-k3u1fbpfcp-watermark.image?)

定义`$color`属性为red后就直接可以在文件中使用这个变量。
<br>
<br>
<br>

## 三、sass重要特性：嵌套，分块与引用
**1.嵌套是Sass最重要也是最实用的特性**，嵌套将会使你喜欢上sass.<br>其实上文中你已经接触到了sass的嵌套，接下来我们具体学习一下嵌套的基本格式：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a432cfbced26438496b94327fd378a33~tplv-k3u1fbpfcp-watermark.image?)
 - 这就是一个最简单的**嵌套**，如图所示，content盒子中的span标签的字体颜色被定义为了红色，<br>文中的`&`表示同级父盒子，也就是给content盒子设置背景颜色为blue。
这个scss文件所生成的css文件如下：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bbb763397811459c9eeefea9df20f29a~tplv-k3u1fbpfcp-watermark.image?)
<br>
<br>

**2.代码分块与引入**

**代码分块**用于将网页的各个模块的代码分开，使各部分代码更加**易懂，轻便**，在工作场景中有十分重要的地位。
<br>本文给出代码分块例子如下：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d0f4ca7a3fba4433a056813e48e9c45f~tplv-k3u1fbpfcp-watermark.image?)

如图可以看到，我们创建一个`_header`模块文件，并在其中设置header的背景颜色，再在main主文件中使用`@import`将`_header`文件引入，就可以在main.css文件中生成相应的代码.

**特别注意：** 模块文件必须在前面加`_`下划线，防止自动生成对应的`.css文件`和`.map文件`

<br>在引用区块文件时，下划线可以省略！
<br>
<br>

## **四、mixin混入的使用方法**

除了可以通过将代码模块化简化代码以外，我们还可以用`mixin`混入的方式，将重复代码**封装**成一个**包裹**，`mixin`还可以携带一个参数，在我们需要它的时候用`@include`将其调用出来，达到代码简化明了同时方便使用的目的。
<br>

本文给出demo如下：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab49dd6f30a24543abc3b8fc24b7a0d6~tplv-k3u1fbpfcp-watermark.image?)

在**主scss**文件中使用`@import 'mixin'`的方式来引入mixin模块，在`_mixin.css`文件中写出<br>@mixin  **指令名称**（**参数**）{<br>内容区<br>}<br>同时在sass文件中使用与mixin相对应的`@include`来调用`@mixin`<br>本文所用的为`@mixin font ($color) `意为设置指令名称font，传入参数$color,在**主scss**文件中使用`@include font (rgb(X,X,X))`将封装后的**mixin代码**引入，最后**效果**见最后一个图片，css代码**正确**书写。
<br><br><br><br>

## **五、@extend继承指令**

`@extend`指令同样可以简化代码，使用这个指令能够继承某部分css样式。
<br>本文给出demo如下：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbb08eb7b42446989128f546b0d1355d~tplv-k3u1fbpfcp-watermark.image?)

我们在.nav 中写入`@extend`指令后，相应的css文件中 原本`.content`的样式将以并集选择的方法被共用（继承）极大程度的简化了代码复杂程度。

**`@extend`简单方便，请读者牢记！**

<br>
<br>
<br>

## **六、媒体查询@media  @content**

`@media`指令经常用于响应式开发，一个最基本的`@media`格式如下:


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa24bfc90ca4481dbbefee04fda7a7a1~tplv-k3u1fbpfcp-watermark.image?)

在最基本的`@media`格式中，我们每写一行scss样式代码，就必须再写一条一模一样的`@media screen`代码，此时，一旦项目庞大，那么代码将变得复杂繁多，冗余难看。

**解决办法：**
<br>

利用**mixin封装**的特性，将media代码封装成块，最终每部分代码仅需书写一次。<br>
本文给出demo如下：


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fde79f7b3a604ff1a2b6c3c3eb1d149c~tplv-k3u1fbpfcp-watermark.image?)

### 特别注意：
其中height属性是通过`@mixin`**指令添加**的，而color属性是使用`@media`所对应的`@content`指令将**内容区代码传入**的，两种方式不同，读者需**注意区分**！<br>
<br>
**这里的@content是指令而.content是一个选择器!**

接下来我们将`@media`指令利用`@mixin`封装起来，并且mixin可以带参数，然后在需要`@media`的位置，只需要利用`@include `指令将封装好的media引入，就会自动在对应的css文件中生成我们需要的media代码，极大的便利我们书写样式表。

<br> <br>

## 七、sass的其他功能

本文已经将最最常用的sass功能介绍完毕，学会以上功能已经可以应对基本的开发了！<br><br><br>其实sass还有很多其他功能，本文就不一一列举介绍了...
- 条件语句与循环语句
- 判断语句
- sass可以自定义函数
- .......

<br>
<br>


作者：胜利111<br>
日期: **2022.5.17**