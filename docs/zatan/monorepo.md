## 单一大仓与主干开发
`Google工程效能：单一大仓➕Bazel➕主干开发   一个仓库保存上十亿行代码`

## 什么是单一大仓和主干开发

monorepo：即单仓，多个项目放在一个仓库进行版本管理。
TBD主干开发：短生命周期的分支

## 为什么？

1. 本质是研效提升，一致性和复用性的提升
2. 代码都在一个仓库，方便管理和复用，减少不同仓库重复代码或不同团队重复造轮子的场景
3. 统一的代码检查流，集成即用。所有人都可以看到你的代码，心里上互相监督。
4. 提高开发效率，维护成本低，   CICD等一致性，减少重复工作

## 弊端
存量迁移成本、不利于对外开源

## 
国际站官网重构架构为 pnpm workspace
项目结构为
├── .huksy
├── docs
├── packages
|   ├── admin-cms// 后管-cms
|   ├── admin-market // 后管-云市场运营平台
|   ├── admin-operation // 后管-活动运营平台
|   ├── console-overview // 控制台-预览
|   ├── console-ses // 控制台-ses
|   ├── common-main // 公共库
|   ├── common-portal // 公共库-官网模块
|   ├── common-menu // 公共库-菜单模块
|   ├── portal-main // 官网-主应用
|   ├── portal-market // 官网-云市场应用
├── .eslintignore
├── .eslintrc.js
├── .gitingnore
├── .prettierrc
├── .prettierrignore
├── package.json

## 大仓文档管理

TODO: jsdoc

## 大仓和单仓
大仓=单仓➕大体量基础建设支持

