# WeChat

使用nodejs+mysql开发的微信公众号后台项目，实现基本的回复、授权、使用jsApi等功能。具体模块有：

1. 获取access_token、获取ticket
2. 用户管理（粉丝）
   - 设置用户备注名称
   - 获取用户基本信息
   - 批量获取用户基本信息
   - 获取用户列表
3. 标签管理
   - 创建标签
   - 获取标签
   - 编辑标签
   - 删除标签
   - 获取某个标签下的用户
   - 批量为用户打标签
   - 批量为用户取消标签
   - 获取用户身上的标签
4. 模板操作
   - 获取模板id
   - 获取模板列表
   - 删除模板
   - 发送模板消息
   - 使用openid列表群发模板消息
5. jsApi使用
   - jsApi-config注入签名生成
6. 素材管理
   - 上传临时素材
   - 删除临时素材
   - 上传永久素材
   - 删除永久素材
7. 图灵
   - 自动回复
   - 对接图灵Ai机器人




> 本项目由 [Wlisfes](https://github.com/Wlisfes) 开发，您可以随意修改、使用！！

# 如何安装与使用

```
git clone https://github.com/Wlisfes/WeChat.git

cd WeChat

npm install     安装依赖

npm run dev     运行

npm run build   打包
```

# 技术栈

Koa（web后台框架）
mysql（数据库框架）
axios（http网络请求）
co-wechat（微信提供的nodejs微信公众号库）
babel（es6/7 编辑运行）


## 其他说明
- 个人练手项目 不喜勿喷
- 如果您喜欢该作品，您可以点右上角 "Star" "Fork" 表示支持 谢谢！
- 如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR
