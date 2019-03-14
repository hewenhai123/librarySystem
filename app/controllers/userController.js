const User = require('../models/user');const hcountys = require('../models/hcountys');const hstructures=require('../models/hstructures');const preordains = require('../models/preordains');const {body, validationResult} = require('express-validator/check');const {sanitizeBody} = require('express-validator/filter');// const {sanitizeBody} = require('express-validator/filter');const async=require('async');exports.index = (req, res) => {    res.render('login', {"title": "登录", "msg": ""});};exports.login_post = [        body('username', "请填写用户名").isLength({min: 1}).trim(),        body('password', "请填写密码").isLength({min: 1}).trim(),        sanitizeBody('username').trim().escape(),        sanitizeBody('password').trim().escape(),        (req, res, next) => {            const errors = validationResult(req);            if (!errors.isEmpty()) {                res.render('login', {"title": "登录", 'msg': errors.array()});            } else {                let userName = req.body.username;                let password = req.body.password;                User.find({"uname": userName})                    .exec((err, user_info) => {                        if (err) {                            console.log(err)                            return                        }                        if (user_info.length) {                            if (user_info[0]["pwd"] === password) {                                res.redirect('/');                                return                            }                            res.render('login',                                {                                    'title': "登录",                                    "msg": [{msg: "密码错误"}],                                    "userInfo": {"userName": userName}                                });                        } else {                            res.render('login',                                {                                    'title': "登录",                                    "msg": [{msg: "用户名不存在"}],                                    "userInfo": {"userName": userName}                                })                        }                    });            }        }    ];exports.get_register=(req,res)=>{    res.render('register',{"title":"注册"})};exports.post_register=(req,res)=>{    res.render('register',{"title":"注册"})};exports.get_search=(req,res)=>{    async.parallel({        hstructures:(callback)=>{            hstructures.find({},{stname:1},callback)        }  ,        hcountys:(callback)=>{            hcountys.find({},{ctname:1},callback)        },        preordains:(callback)=>{            preordains.find({},{tyname:1},callback)        }    },(err, results) => {        res.render('search', {title: 'Local Library Home', error: err, data: results})        })};