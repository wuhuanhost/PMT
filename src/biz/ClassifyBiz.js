const cd = require('../dao/ClassifyDao');

/**
 * 添加分类
 * @param {*} name 
 * @param {*} remark 
 * @param {*} cb 
 */
exports.add = function(name, remark, cb) {
    cd.add(name, remark, cb);
}

/**
 * 查询所有的分类
 * @param {*} cb 
 */
exports.queryAllClassify = function(cb) {
    cd.queryAllClassify(cb)
}

/**
 * 根据id修改某个分类
 * @param {*} cla 
 * @param {*} cb 
 */
exports.updateClassifyById = function(cla, cb) {
    cd.updateClassifyById(cla, cb)
}