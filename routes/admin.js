var express = require('express');
var router = express.Router();
var path = require("path");

router.get('/test1.html', function(req, res, next) {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++")
    res.redirect('/index');
});

module.exports = router;