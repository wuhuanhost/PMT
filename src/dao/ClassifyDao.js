/**
 * 分类管理
 */


const db = require('../utils/db');
const uuid1 = require('uuid/v1');

/**
 * 添加分类
 */
exports.add = function(name, remark, cb) {
    try {
        // db.defaults({ classify: [] })
        //     .write()
        console.log(name + "      " + remark + "          " + uuid1())
        db.get('classify').push({ "id": uuid1(), "name": name, "remark": remark }).write();
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
exports.queryAllClassify = function(cb) {
    var classify = "";
    try {
        classify = db.get('classify').value();
    } catch (error) {
        cb(error, null)
    }
    cb(null, classify)
}



/**
 * 根据id修改某个分类
 * @param {*} cla 
 * @param {*} cb 
 */
exports.updateClassifyById = function(cla, cb) {
    try {
        var dasd = db.get('classify').find({ 'id': cla.id }).assign(cla).write();
        console.log(dasd)
    } catch (error) {
        cb(error, null)
    }
    cb(null, "success");
}