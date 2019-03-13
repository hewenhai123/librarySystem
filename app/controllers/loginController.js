const User = require('../models/user');const {body, validationResult} = require('express-validator/check');const {sanitizeBody} = require('express-validator/filter');https://wenku.baidu.com/view/ec7cc84bdaef5ef7bb0d3c62.html?pn=51exports.index = (req, res) => {    res.render('login', {"title": "登录", "msg": ""});};exports.login_post =    [        body('username', "请填写用户名").isLength({min: 1}).trim(),        body('password', "请填写密码").isLength({min: 1}).trim(),        sanitizeBody('username').trim().escape(),        sanitizeBody('password').trim().escape(),        (req, res, next) => {            const errors = validationResult(req);            if (!errors.isEmpty()) {                res.render('login', {"title": "登录", 'msg': errors.array()});            } else {                let userName = req.body.username;                let password = req.body.password;                User.find({"uname": userName})                    .exec((err, user_info) => {                        if (err) {                            console.log(err)                            return                        }                        if (user_info.length) {                            if (user_info[0]["pwd"] === password) {                                res.redirect('/');                                return                            }                            res.render('login',                                {                                    'title': "登录",                                    "msg": [{msg: "密码错误"}],                                    "userInfo": {"userName": userName}                                });                        } else {                            res.render('login',                                {                                    'title': "登录",                                    "msg": [{msg: "用户名不存在"}],                                    "userInfo": {"userName": userName}                                })                        }                    });            }        }    ];