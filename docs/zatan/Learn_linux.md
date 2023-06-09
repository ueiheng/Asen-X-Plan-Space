# 关于快速入门linux系统
## 介绍
- Linux 是一种自由和开放源代码的类 Unix 操作系统，它在服务器领域和嵌入式系统中广泛使用。如果你是 Linux 的初学者，这里提供一些 Linux 快速入门的基础知识，帮助你快速上手 Linux 系统。

## linux文件系统
- Linux 的文件系统采用了一种树形结构的层次目录结构，即所谓的 Filesystem Hierarchy Standard (FHS)，它规定了文件在 Linux 系统中应该如何组织和存储。

- 在 Linux 中，根目录 / 是所有文件和目录的起始点，包含了整个系统的文件和目录。下面是关于 Linux 文件系统的一些基本知识：

- 根目录 (/)：所有文件和目录的起始点，在这个目录下，包含了整个系统的文件和目录。

1. bin 目录 (/bin)：包含系统启动和运行所需要的基本命令。

2. boot 目录 (/boot)：包含系统引导程序和内核镜像。

3. dev 目录 (/dev)：包含设备文件，如键盘、鼠标、硬盘、光驱等等。

4. etc 目录 (/etc)：包含系统配置文件和脚本文件。

5. home 目录 (/home)：通常是普通用户的主目录。

6. lib 目录 (/lib)：包含系统运行时所需要的库文件。

7. media 目录 (/media)：用于挂载可移动设备，如 USB 驱动器、CD-ROM 等等。

8. mnt 目录 (/mnt)：用于挂载临时的文件系统或存储设备。

9. opt 目录 (/opt)：用于存放第三方软件包和程序文件。

10. root 目录 (/root)：root 用户的主目录。

11. sbin 目录 (/sbin)：包含系统管理员使用的系统命令。

12. tmp 目录 (/tmp)：用于存放临时文件。

13. usr 目录 (/usr)：包含系统的共享数据、库文件、头文件和文档等。

14. var 目录 (/var)：用于存储系统运行时需要改变的文件，如日志文件、邮件箱、缓存文件等等。

**这些目录和文件是 Linux 文件系统的基础组成部分，了解它们的作用和功能对于管理和维护 Linux 系统非常重要。**

## ubuntu与linux的关系
- Ubuntu 是基于 Linux 内核并使用 GNU 工具和软件的自由开源操作系统，是 Linux 中最为流行的发行版之一。因此，Ubuntu 和 Linux 系统是密不可分的，可以说 Ubuntu 是 Linux 系统的一种发行版。

- Linux 是一个以 Unix 为原型，自由、开放源代码的类 Unix 操作系统内核，可以在各种硬件设备、服务器以及个人电脑上运行。Linux 的开源属性使得任何人都能够对其进行修改和分发，因此 Linux 发行版非常多，比如 Ubuntu、Debian、Red Hat、Fedora 等等。每个发行版都有自己的特点和优缺点，Ubuntu 也不例外。

- Ubuntu 是由南非企业家 Mark Shuttleworth 创建的，旨在为个人电脑和服务器提供易于使用的、免费的、高质量的操作系统。Ubuntu 除了基本的 Linux 软件包之外，还包括自己的定制工具、桌面环境和其他应用程序。相比其他发行版，Ubuntu 更加注重易用性和用户友好性，因此得到了广泛的用户支持和认可。

- 总之，Ubuntu 和 Linux 系统之间的关系是 Ubuntu 是 Linux 系统的一种发行版，它基于 Linux 内核，并在其上添加了自家的软件包和工具，旨在提供易用、高质量的操作系统。

## 常见操作命令
1. 系统命令：Linux 系统是通过终端命令行来操作的，因此了解一些常用命令是必须的。一些基础的命令包括：
- ls：列出当前目录下的文件和子目录。
- cd：切换当前工作目录。
- mkdir：创建一个新目录。
- cp：复制文件或目录。
- mv：移动文件或目录。
- rm：删除文件或目录。
2. 用户管理：在 Linux 中，每个用户都有一个唯一的用户名和用户组，用户可以通过用户名和密码登录系统。一些- 基本的用户管理命令包括：
- useradd：创建新用户。
- passwd：更改用户密码。
- su：切换到 root 用户。
- sudo：以超级用户的身份运行命令。
3. 文件权限：Linux 中，每个文件和目录都有一个所有者和一个用户组，同时还有读、写、执行三种权限。一些基本- 的文件权限管理命令包括：
- chmod：更改文件或目录的权限。
- chown：更改文件或目录的所有者。
- chgrp：更改文件或目录的用户组。
4. 软件安装：在 Linux 中，你可以使用软件包管理器轻松安装和卸载软件。一些常用软件包管理器包括：
- apt-get：Debian 和 Ubuntu 发行版的包管理工具。
- yum：Red Hat 系列发行版的包管理工具。
- pacman：Arch Linux 的包管理工具。
