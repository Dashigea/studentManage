const express = require('express')
const path = require('path')
// 创建 路由
const accountRouter = express.Router()
// 使用控制器就需要引入完整的的路径
const accountCTRL = require(path.join(__dirname,'../controllers/accountController.js'))
// 路由需要调用啥,就抛给accountCTRL的方法处理
accountRouter.get('/login',accountCTRL.getLoginPage)
accountRouter.get('/register',accountCTRL.getRegisterPage)
accountRouter.get('/vcode',accountCTRL.getVcodeImage)
// 别忘记将方法暴露出去给app调用
module.exports = accountRouter