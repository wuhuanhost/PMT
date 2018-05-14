(function() {
    var width1 = document.documentElement.clientWidth
    var width2 = 750
    if (width1 > 750) { width1 = 460 };
    var zoom = width1 / width2
    document.querySelector('html').style.fontSize = zoom * 100 + 'px'
    document.querySelector('html').style.height = '100%'
    document.querySelector('html').setAttribute('data-dpr', window.devicePixelRatio)
})()

/**
 * dom加载完成做一些初始化工作
 */
window.onload = function() {

    //设置全局页面属性
    settingPageGlobalPrototype();
}

/**
 * 设置也绵阳歘车全局属性，修改的时候在一处修改即可
 */
function settingPageGlobalPrototype() {
    //全局设置一些页面内容
    //全局设置title
    document.querySelector("title").innerText = localStorage.getItem("APP_TITLE");

}


/*
 ** 主动加载js和css，并且添加版本号，防止浏览器缓存
 */
function loadCustomJsCss(FilesArray, cb) {
    //console.log($("script[src='js/utils/utils.js']").remove())
    Import.LoadFileList(FilesArray, '1.8.0', function() {
        /*这里写加载完成后需要执行的代码或方法*/
        // alert("ds");
        cb()
    });
}


/**
 * 初始化jquery插件
 */
var classcodes = [];
window.Import = {
    /*加载一批文件，_files:文件路径数组,可包括js,css,less文件,succes:加载成功回调函数*/
    LoadFileList: function(_files, _ver, succes) {
        var FileArray = [];
        if (typeof _files === "object") {
            FileArray = _files;
        } else {
            /*如果文件列表是字符串，则用,切分成数组*/
            if (typeof _files === "string") {
                FileArray = _files.split(",");
            }
        }
        if (FileArray != null && FileArray.length > 0) {
            var LoadedCount = 0;
            for (var i = 0; i < FileArray.length; i++) {
                loadFile(FileArray[i], _ver, function() {
                    LoadedCount++;
                    if (LoadedCount == FileArray.length) {
                        succes();
                    }
                })
            }
        }
        /*加载JS文件,url:文件路径,success:加载成功回调函数*/
        function loadFile(url, _ver, success) {
            if (!FileIsExt(classcodes, url)) {
                var ThisType = GetFileType(url);
                var fileObj = null;
                if (ThisType == ".js") {
                    fileObj = document.createElement('script');
                    url = url + "?ver=" + _ver;
                    fileObj.src = url;
                } else if (ThisType == ".css") {
                    fileObj = document.createElement('link');
                    url = url + "?ver=" + _ver;
                    fileObj.href = url;
                    fileObj.type = "text/css";
                    fileObj.rel = "stylesheet";
                } else if (ThisType == ".less") {
                    fileObj = document.createElement('link');
                    url = url + "?ver=" + _ver;
                    fileObj.href = url;
                    fileObj.type = "text/css";
                    fileObj.rel = "stylesheet/less";
                }
                success = success || function() {};
                fileObj.onload = fileObj.onreadystatechange = function() {
                    if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
                        success();
                        classcodes.push(url)
                    }
                }
                document.getElementsByTagName('head')[0].appendChild(fileObj);
            } else {
                success();
            }
        }
        /*获取文件类型,后缀名，小写*/
        function GetFileType(url) {
            if (url != null && url.length > 0) {
                return url.substr(url.lastIndexOf(".")).toLowerCase();
            }
            return "";
        }
        /*文件是否已加载*/
        function FileIsExt(FileArray, _url) {
            if (FileArray != null && FileArray.length > 0) {
                var len = FileArray.length;
                for (var i = 0; i < len; i++) {
                    if (FileArray[i] == _url) {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}

/**-------------------------------------------------------------------------------------------------------- */
/**
 *
 * @param 总价 money
 * @param 分期数 count
 * @param 利率 rate
 */
function computedPriceByStages(money, count, rate) {
    var price = 0 // 没期的价格
    price = (money + money * rate) / count;
    return price;
}

/**---------------------------------------------------------------------------------------------------------- */
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

/**--------------------------------------------------删除数组中的某个元素---------------------------------------- */
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

/**-------------------------------------------判断客户端的类型-------------------------------------------------- */
var util = (function() {
    var u = navigator.userAgent.toLowerCase();
    return {
        isIphone: function() { return (RegExp("iphone").test(u) || RegExp("ipod touch").test(u)) },
        isIpad: function() { return RegExp("ipad").test(u) },
        isAndroid: function() { return (RegExp("android").test(u) || RegExp("android 2").test(u)) },
        isMB: function() { return (util.isIphone() || util.isIpad() || util.isAndroid()) }
    };
})();
window.util = util;
(function() {
    if (!util.isMB()) {
        console.warn("请在手机浏览器中浏览最佳效果！")
            // window.location.href = 'errMsg.html'; /**这里改返回你的PC访问端 */
    }
})();