// 导入express
const express = require('express')
const path = require('path')
// 创建 路由
const accountRouter = express.Router()
// 使用控制器就需要引入完整的的路径
const accountCTRL = require(path.join(__dirname, '../controllers/accountController.js'))
// 处理登录页面请求
accountRouter.get('/login', accountCTRL.getLoginPage)
// 处理注册页面请求
accountRouter.get('/register', accountCTRL.getRegisterPage)
// 处理验证码请求
accountRouter.get('/vcode', accountCTRL.getVcodeImage)
// 处理注册请求
accountRouter.post('/register', accountCTRL.register)
// 处理登录请求
accountRouter.post('/login', accountCTRL.login)
// 别忘记将方法暴露出去给app调用
module.exports = accountRouter