exports.index = (req, res) => {    res.render('login', {"title": "登录"});};exports.login_post = (req, res) => {    let user = {        uname: 'lisi',        pwd: '123456'    };    let userName = req.body.uname;    let password = req.body.pwd;    if (userName == user.uname && password == user.pwd) {        res.redirect('/catalog');    } else {        res.render('login', {'title': "登录", "msg": "用户名不存在或密码错误"})    }    // res.send({"username":req.body.uname,"pwd":req.body.pwd})};