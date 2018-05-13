const good = require('../biz/GoodsBiz')


exports.add = function(req, res) {
    var goods={};
    goods.name = req.body.name
    goods.remark = req.body.remark;
    goods.goods_cover = req.body.goods_cover;
    goods.state = req.body.state;
    goods.state1 = req.body.state1;
    goods.price = req.body.price;
    goods.price_6 = req.body.price_6;
    goods.price_12 = req.body.price_12;
    goods.price_24 = req.body.price_24;
    goods.classifyId = req.body.classifyId
    good.add(goods, function(err, result) {
        if (err) {
            res.json({ "err": true, "msg": "服务器错误，稍后重试！" });
        } else {
            res.json({
                "data": "",
                "msg": "商品添加成功"
            });
        }
    });
}


exports.queryAll = function(req, res) {
    good.queryAll(function(err, result) {
        if (err) {
            res.json({ "err": true, "msg": "服务器错误，稍后重试！" });
        } else {
            res.json({
                "data": result,
                "msg": "数据获取成功"
            });
        }
    })
}



exports.updateGoodsById = function(req, res) {
    var goods={};
    goods.name = req.body.name
    goods.remark = req.body.remark;
    goods.goods_cover = req.body.goods_cover;
    goods.state = req.body.state;
    goods.state1 = req.body.state1;
    goods.price = req.body.price;
    goods.price_6 = req.body.price_6;
    goods.price_12 = req.body.price_12;
    goods.price_24 = req.body.price_24;
    goods.classifyId = req.body.classifyId;
    goods.id=req.body.id;
    good.updateGoodsById(goods, function(err, result) {
        if (err) {
            res.json({ "err": true, "msg": "服务器错误，稍后重试！" });
        } else {
            res.json({
                "data": "",
                "msg": "修改成功"
            });
        }
    })
}