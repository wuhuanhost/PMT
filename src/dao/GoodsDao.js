/**
 * 商品管理
 */


const db = require('../utils/db');
const uuid1 = require('uuid/v1');

/**
 * 添加分类
 */
exports.add = function(goods, cb) {
    goods.id = uuid1();
    try {
        db.defaults({ goods: [] })
            .write()
        console.log(goods)
        db.get('goods').push(goods).write();
    } catch (error) {
        console.log(error)
        cb(error, null);
    }
    cb(null, "success");
}


/**
 * 查询所有的分类
 * @param {*} cb 
 */
exports.queryAll = function(cb) {
    var goods = "";
    try {
        goods = db.get('goods').value();
    } catch (error) {
        cb(error, null)
    }
    cb(null, goods)
}



/**
 * 根据id修改某个分类
 * @param {*} cla 
 * @param {*} cb 
 */
exports.updateGoodsById = function(goods, cb) {
    console.log("==================================>")
    console.log(goods)
    try {
        var dasd = db.get('goods').find({ 'classifyId': goods.classifyId, 'id': goods.id, }).assign(goods).write();
    } catch (error) {
        cb(error, null)
    }
    cb(null, "success");
}