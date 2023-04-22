# `CSS3`新增布局之一：`flex`布局
## flex背景
flex 布局背后的**主要思想**是让容器能够改变其项目的宽度/高度（和顺序）以最好地填充可用空间（主要是为了适应各种显示设备和屏幕尺寸）。弹性容器扩展项目以填充可用的可用空间或缩小它们以防止溢出。

最重要的是，与常规布局（基于垂直的块和基于水平的内联）相反，**弹性盒布局与方向无关**。虽然这些适用于页面，但它们缺乏灵活性来支持大型或复杂的应用程序（尤其是在涉及方向更改、调整大小、拉伸、收缩等时）。

**注意：** ` flexbox `布局最适合应用程序的组件和小规模布局，而`Grid`布局适用于更大规模的布局。
 

 网页布局是`CSS`的一个重点应用。布局的**传统解决方案**，基于盒状模型，依赖 **display**属性 +**position**属性 + **float**属性。它对于那些特殊布局非常不方便，比如，**垂直居中**就不容易实现。
## flex基础知识
flex布局（flex是flexible box的缩写）， 也称为**弹性盒模型** 。将属性和属性值（display:flex; ）写在哪个标签样式中，谁就是 容器；它的所有子元素自动成为容器成员，称为**项目**。

当一个元素的display 取值为flex，所有项目(子元素)会在一行显示；如果所有项目的尺寸之和大于容器，也不会超出父元素的宽、高度。不会换行(每个项目都会自动缩小相应的比例)。
> 作为可以替代浮动的新布局，flex布局以更先进，更简洁的优点，越来越受大家欢迎。
## 主要概念

-   **main axis** – 弹性容器的主轴是弹性项目沿其布置的主轴。请注意，它不一定是水平的；这取决于`flex-direction`属性.
-   **main-start | main-end** – 弹性项目放置在容器内，从 main-start 开始到 main-end。主尺寸-一个弹性项目的宽度或高度，无论是在主尺寸，是项目的主要尺寸。弹性项目的主要尺寸属性是“宽度”或“高度”属性，以主要尺寸中的为准。
-   **main size** –  垂直于主轴的轴称为交叉轴。它的方向取决于主轴方向。

-   **cross axis** – 弹性线填充了项目，并从弹性容器的交叉开始侧开始放置到容器中，并朝向交叉端侧。
-   **cross-start | cross-end** –弹性线填充了项目，并从弹性容器的交叉开始侧开始放置到容器中，并朝向交叉端侧。
-   **cross size** –弹性项目的宽度或高度，以交叉维度为准，是项目的交叉大小。横向尺寸属性是横向尺寸中的“宽度”或“高度”中的任何一个。


![image.png](https://img-blog.csdnimg.cn/img_convert/c93c97e1b32b43f37b3f1b8db7a33f9b.png)

## 容器六属性
### 将容大盒子的display属性设置为display : flex ;大盒子将变成容器，容器拥有6个新属性

**1. flex-direction**

flex-direction属性决定主轴的方向（即项目的排列方向）。

```css
.container { 
flex-direction: row | row-reverse | column | column-reverse;
}
```
- flex-direction属性描述主轴的延展方向.

- 默认值为row：主轴将水平自左向右

- row-reverse:主轴水平自右向左

- column:主轴竖直且自上而下

- column主轴竖直且自下而上

**2. flex-wrap**

弹性包装，flex布局中的项目都会尝试在一行中展示

```css
.container { 
flex-wrap: nowrap | wrap | wrap-reverse; 
}
```
- flex-wrap:nowrap(默认值):所有弹性项目都将在一行

- flex-wrap:当项目排不下时自动换行.

-  wrap-reverse: flex 项目将从下到上换行成多行。

**3. flex-flow**

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

```css
.box {

  flex-flow: `flex-direction`, `flex-wrap`;
  
}
```



**4. justify-content**

justify-content属性定义了项目在主轴上的对齐方式。

```css
.box {

  justify-content: flex-start | flex-end | center | space-between | space-around;
  
}
```

- flex-start:左对齐
- flex-end:右对齐
- center(常用):水平居中
- space-between:两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。**注意**：此时项目之间的间隔比项目与边框的间隔大一倍。


**5. align-items**

align-items属性定义项目在交叉轴上如何对齐。

```css
.box {

  align-items: flex-start | flex-end | center | baseline | stretch;
  
}
```


**align-items属性通常用于设置垂直居中**

-   flex-start：交叉轴的起点对齐。
-   flex-end：交叉轴的终点对齐。
-   **center：交叉轴的中点对齐。**
-   baseline: 项目的第一行文字的基线对齐。
-   stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

**6. align-content**

align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.box {

  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
  
}
```

-   flex-start：与交叉轴的起点对齐。
-   flex-end：与交叉轴的终点对齐。
-   center：与交叉轴的中点对齐。
-   space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
-   space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
-   stretch（默认值）：轴线占满整个交叉轴。

## 项目属性


以下6个属性设置在项目上。

> 1.  order
order属性越小，项目越靠近主轴起点

![image.png](https://img-blog.csdnimg.cn/img_convert/23d2a14b1d5e8f919d8434bfe166d22c.png)
<br>
<br>
<br>

> 2. flex-grow

**flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。**


注意：如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
<br>
<br>
<br>

> 3. flex-shrink
**flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。**

注意：如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。
<br>
<br>

> 3.  flex-basis
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

```css
.item {

  flex-basis: <length> | auto; /* default auto */
  
}
```
<br>
<br>

> 4.  flex
常用于快速样式书写

**flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。**
<br>
<br>
<br>

> 5.  align-self
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

<br>
<br>
<br>
<br>
作者：Asen

日期：2022.5.14

参考文献：http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-order
