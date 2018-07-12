const path = require('path')
const captchapng = require('captchapng')
exports.getLoginPage=(req,res)=>{
    // 控制器将得到的静态页面返回给浏览器
    res.sendFile(path.join(__dirname,"../views/login.html"))
}
// 获取验证码
exports.getVcodeImage = (req,res)=>{
    const p = new captchapng(80,30,parseInt(Math.random()*9000+1000)); // width,height,numeric captcha
    p.color(143, 236, 56, 255);  // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

    const img = p.getBase64();
    const imgbase64 = new Buffer(img,'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);
}
exports.getRegisterPage=(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/register.html"))
}
