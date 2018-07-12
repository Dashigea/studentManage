const express = require('express')
const path = require('path')
const app = express()
// node中处理静态资源
app.use(express.static(path.join(__dirname,'statics')))
// 继承路由中间件
const accountRouter = require(path.join(__dirname,'./routers/accountRouter.js'))
// express 路径里面有account 就去路由判断
app.use('/account',accountRouter)
// 开启监听事件
app.listen(3000,'127.0.0.1',err=>{
    if(err){
        console.log(err);
    }
    console.log("start ok");
    
})