WebBangumiAPI
======================================

这个项目用于把Bangumi的网页版封装成JavaScript可直接调用的API，使用TypeScript编写。

目标：在React Native / Web Browser(with Webpack / browserify) / Node均可直接调用。

目前版本尚未开放外部调用，只能在程序的index.ts里编写测试代码。

## 安装
``npm install webbangumiapi --save`` （尚未Publish）

## 使用
### 在Node中
```javascript
/* 
  Node没有fetch，所以需要为其引入一个Polyfill. 
  此处代码建议在工程入口执行，只需要执行一次。
*/
require('webbangumiapi').fetch = require('node-fetch');

/*
  登录
  项目按照ES6 Import规范编写，故Node调用需要.default。
 */
var Login = require('webbangumiapi/API/Login').default;
Login.request("Username", "Password").then(c => {
  console.log("登录成功");
}).catch(d => {
  console.log("登录失败");
})
```

### 在浏览器 / React Native中
```javascript
/*
  此处默认你已经使用Webpack / browserify / React Packager等工具打包
 */
import Login from 'webbangumiapi/API/Login';
Login.request("Username", "Password").then(c => {
  console.log("登录成功");
}).catch(d => {
  console.log("登录失败");
})
```


## API
- [ ] 首页
  - [x] 登录 [``API/Login``](example/login.js)
  - [x] 正在观看列表 [``API/WatchingList``](example/watching.js)
  - [x] 时间线（返回HTML） [``API/Timeline``](example/timeline.js)
- [ ] 单项信息
  - [ ] 页面信息 [``API/Anime/Information``](example/anime-information.js) （部分完成）
    - [x] 角色信息
    - [x] 制作人员
    - [ ] 常去小组
    - [ ] 正在观看
    - [ ] 推荐目录
  - [x] 角色信息 [``API/Anime/Character``](example/anime-person_and_character.js)
  - [x] 制作人员 [``API/Anime/Person``](example/anime-person_and_character.js)
  - [x] 吐槽 [``API/Anime/Tucao``](example/tucao.js)
  - [ ] 讨论
  - [ ] 评论
- [ ] 列表
  - [ ] 排行榜
  - [ ] 每日放送
  - [ ] 标签
  - [ ] 分类浏览
  - [ ] 日志
- [ ] 动画
  - [ ] 章节
     - [x] 设置章节进度 [``API/Anime/Watched``](example/watching.js)
     - [x] 章节评论 [``API/Anime/EpDiscussion``](example/epdiscussion.js)
     - [ ] 章节信息
  - [ ] 设置整部动画观看进度
- [ ] 人物信息 [``API/Person/``](example/person.js)（未完成）
     - [ ] 出演列表
     - [ ] 作品列表
     - [ ] 收藏
- [ ] 书籍
     - [ ] 单行本
     - [ ] 设置整本书阅读进度
- [ ] 音乐
     - [ ] 曲目
- [ ] 游戏
- [ ] 小组
  - [ ] 随便看看
  - [ ] 小组列表
  - [ ] 话题 / 回复
      - [ ] 查看
      - [ ] 新建
      - [ ] 编辑
      - [ ] 删除
  - [ ] 小组API
      - [ ] 加入小组
      - [ ] 创建小组
      - [ ] 退出小组
      - [ ] 设置小组
- [ ] 个人信息
     - [ ] TO BE CONTINUED...
- [ ] 搜索
- [ ] TO BE CONTINUED...
      

## 开发
### 配置环境
```bash
npm install gulp typings -g
npm install
typings install
```
### 实时编译 & 调试
```bash
gulp watch
```
### 编译
```bash
gulp build
```
### 注意事项
- 不可依赖``request``等依赖于Node built-in module的库，也不可依赖``jQuery``等依赖于DOM的库。
- 开发能使用的API以[React Native](https://facebook.github.io/react-native/)可使用的API为准（例如网络访问只能使用``fetch``，在Node上用``node-fetch``作为devDep）


## 测试
不提供测试（用户名密码一改测试就懵逼了）

## 开源协议
The MIT License