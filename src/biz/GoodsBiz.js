const GoodsDao = require('../dao/GoodsDao');

/**
 * 添加分类
 * @param {*} name 
 * @param {*} remark 
 * @param {*} cb 
 */
exports.add = function(goods, cb) {
    GoodsDao.add(goods, cb);
}

/**
 * 查询所有的分类
 * @param {*} cb 
 */
exports.queryAll = function(cb) {
    GoodsDao.queryAll(cb)
}

/**
 * 根据id修改某个分类
 * @param {*} cla 
 * @param {*} cb 
 */
exports.updateGoodsById = function(goods, cb) {
    GoodsDao.updateGoodsById(goods, cb)
}