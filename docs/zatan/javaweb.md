# 关于Javaweb的杂食日记

## 一、Javaweb简介
- JavaWeb 是使用 Java 技术开发 Web 应用程序的一种方式，它包含了 **Java Servlet**、**JavaServer Pages（JSP）**、**JavaServer Faces（JSF）**、**Java API for WebSocket** 等多种技术。**JavaWeb** 具有开发效率高、可移植性好、安全性高等优点，因此被广泛应用于**企业级 Web** 应用程序的开发。

- JavaWeb 技术的核心是 **Servlet** 和 **JSP**。**Servlet** 是一种运行在 Web 服务器上的 Java 类，它能够处理客户端请求并生成响应结果。与传统的 CGI 不同，**Servlet** 只需要在服务器上加载一次，就可以处理多个请求，从而提高了服务器的性能和效率。而 **JSP** 则允许我们将 Java 代码嵌入到 HTML 页面中，以实现更灵活和动态的页面显示效果。

- 在 JavaWeb 的开发中，常常使用一些开发框架来提高效率和降低开发难度。比如 Struts、**Spring**、Hibernate 等，它们分别提供了 **MVC** 模式的 Web 开发框架、企业应用框架和 ORM（对象关系映射）框架等功能，使得开发人员能够快速地构建出高质量、高效率的 Web 应用程序。

- 总的来说，**JavaWeb** 是使用 Java 技术进行 Web 应用程序开发的一种方式，它具有高效率、可移植性好、安全性高等优点，其中 **Servlet** 和 **JSP** 是 JavaWeb 的核心技术。开发人员可以通过使用各种框架来提高开发效率和降低开发难度，从而快速构建出**高质量**的 Web 应用程序。
 
## 二、<% %> 在javaweb中是什么作用？
1. 在**Javaweb**中，<% %> 是一种标记，用于在 **JavaServer Pages（JSP）** 中插入 **Java** 代码。这个标记的作用是告诉 **Web 容器**，在这个标记之间的代码需要被编译和执行。

2. 在JSP页面中，我们可以使用 <% %> 标记来嵌入 **Java** 代码，包括对变量的定义和赋值、循环和控制流语句等等。例如下面这段代码会在JSP页面中输出 **Hello, World!**
```java
<%
    String message = "Hello, World!";
    out.print(message);
%>
```
3. 在这个例子中，<% %> 标记中的 Java 代码定义了一个字符串变量 message，并将其输出到 JSP 页面上。在 JSP 渲染为 HTML 页面之前，Web 容器会先将这个 JSP 编译成 Servlet，并执行其中的 Java 代码。

- 总的来说，<% %> 是 JSP 中用来插入 Java 代码的标记，它将标记之间的代码交给 Web 容器进行编译和执行。

## 三、Javaweb 如何实现路由
- **Javaweb**开发中，通常使用**Servlet**来实现路由。**Servlet**是JavaEE标准的一部分，用于接收和处理Web请求，对于特定的URL地址，可以将请求转发到对应的**Servlet**上进行处理，从而实现**路由**功能。

- 在JavaWeb开发中，使用**Web容器**（例如**Tomcat**）来启动Web应用程序。使用Servlet的开发流程包括编写**自定义Servlet**、映射Servlet的URL地址到**web.xml**中，以及在自定义Servlet中实现业务逻辑。


- 以下是一个简单的示例，在JavaWeb项目中，我们可以创建一个名为**MyServlet**的Java类，继承**HttpServlet**，然后重写其**doGet**()和**doPost**()方法来处理HTTP **GET**和**POST**请求：

```java
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// 继承HttpServlet类
public class MyServlet extends HttpServlet {
    // 两个参数 request 和 response
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 处理GET请求逻辑
        String param = request.getParameter("param");
        response.getWriter().write("Hello World! Your param is " + param);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 处理POST请求逻辑
        String name = request.getParameter("name");
        String age = request.getParameter("age");
        response.getWriter().write("Hello " + name + ", your age is " + age);
    }
}
```

- 然后，在web.xml文件中配置Servlet的映射：
```xml

<servlet>
    <servlet-name>myServlet</servlet-name>
    <servlet-class>com.example.MyServlet</servlet-class>
</servlet>

<servlet-mapping>
    <servlet-name>myServlet</servlet-name>
    <url-pattern>/hello/*</url-pattern>
</servlet-mapping>

```

以上配置表示将 /hello/* 路径下的请求转发到**MyServlet**进行处理。

最后启动**Web容器**，访问http://localhost:8080/hello?param=world 即可看到Hello World! Your param is world的响应结果。

### 总的来说，JavaWeb开发中的路由实现，基于Servlet来实现.
通过web.xml文件的配置可以将URL地址映射到对应的Servlet上进行处理。