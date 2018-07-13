const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()
// node中处理静态资源
app.use(express.static(path.join(__dirname,'statics')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({ secret: 'keyboard cat',resave:true,saveUninitialized:true, cookie: { maxAge: 10 * 60000 }}))
// 继承路由中间件
const accountRouter = require(path.join(__dirname,'./routers/accountRouter.js'))
const studentManagerRouter = require(path.join(__dirname,"./routers/studentManagerRouter.js"))
// express 路径里面有account 就去路由判断
app.use('/account',accountRouter)
app.use('/studentmanager',studentManagerRouter)
// 开启监听事件
app.listen(3000,'127.0.0.1',err=>{
    if(err){
        console.log(err);
    }
    console.log("start ok");
    
})