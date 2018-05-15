var express = require('express');
var router = express.Router();
var path = require("path");
var ac = require('../src/controller/AmindController')
var goods = require('../src/controller/GoodsController.js')

var check = require('../src/filter/check.js');

console.log(check)


router.get('/logout', function(req, res, next) {
    console.log("=====================================")
    delete req.session.account;
    delete req.session.uid;
    delete req.session.session;
    console.log("=====================================")
    console.log(req.session.session)
    res.redirect(301, '/index');
})

//登录后的管理页面
router.get('/admin', check.checkAdminLogin, function(req, res, next) {
    var menu = [{
            name: "分类管理",
            href: "/admin/test1.html"
        }, {
            name: "商品管理",
            href: "/admin/test2.html"
        }
        // , {
        //     name: "测试菜单3",
        //     href: "/admin/test3.html"
        // }
    ];
    res.render('admin', { menu: menu, user: { uid: req.session.uid, token: req.session.token, account: req.session.account } });

});

//admin登录方法
router.post('/login', function(req, res, next) {
    var account = req.body.account;
    var password = req.body.password;
    if (account === "admin" && password === "123") {
        req.session.account = account;
        req.session.password = password;
        req.session.uid = 1;
        req.session.token = account + password;
        res.redirect('./admin');
    } else {
        res.redirect(301, '/index?msg=account or password error');
    }
});


//后台登录首页
router.get('/index', function(req, res, next) {
    // req.session.code = "123456";
    // res.render('index', { code: 12 });
    console.log(req.session.account + "       " + req.session.uid + "       " + req.session.token)
    console.log(req.session.account !== undefined && req.session.uid !== undefined && req.session.token !== undefined)
    if (req.session.account !== undefined && req.session.uid !== undefined && req.session.token !== undefined) {
        res.redirect(301, '/admin');
    } else {
        res.render('index');
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect(301, '/index');
});


/**
 * 添加分类
 */
router.post('/classify/add', function(req, res, next) {
    ac.add(req, res);
})


router.get('/classify/queryAll', function(req, res, next) {
    ac.queryAllClassify(req, res);
})


router.post('/classify/update', ac.updateClassifyById)


//商品管理
router.post('/goods/add', function(req, res, next) {
    goods.add(req, res);
})

router.get('/goods/queryAll', function(req, res, next) {
    goods.queryAll(req, res);
})

router.post('/goods/update', goods.updateGoodsById)

module.exports = router;