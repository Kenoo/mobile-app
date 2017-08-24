/**
 * Created by ued on 2016/11/12.
 */

var fs = require('fs');
var path = require('path');

function getRealPath (option) {
    return path.join(__dirname, option.path) + '.js';
}

function mapPath (option) {
    var realPath = getRealPath(option);
    if (!fs.existsSync(realPath)) {
        return '';
    }
    return realPath;
}

var tip = '数据已经被本地代理！如果要启用远程数据，请在【mock】文件中新建以下相应路径：';
function check (option) {
    var realPath = mapPath(option);
    if (!realPath) {
        return {
            path: realPath,
            mock: false,
            data : {
                success : false,
                msg : tip + option.path
            }
        };
    }
    require.cache[require.resolve(realPath)] = null;
    var mockModule = require(realPath);
    if (!mockModule || typeof mockModule.mockData !== 'function') {
        return {
            mock: false,
            data : {
                success : false,
                msg : tip + option.path
            }
        };
    }
    return {
        mock: typeof mockModule.check === 'function' ? !!mockModule.check(option) : true,
        data: mockModule.mockData(option)
    };
}

function save (option) {

    var realPath = mapPath(option),
        temp = fs.readFileSync(path.join(__dirname, 'template.js')).toString();


    if (!realPath) {
        /// example:  /overview/status/cloudwaf_status

        realPath = getRealPath(option);

        var paths = realPath.split(/[\/|\\]/),
            dirPath = '';


        paths.pop();//去掉文件名

        dirPath = paths.join('/');

        //目录是否存在
        if (!fs.existsSync(dirPath)){
            fs.mkdirSync(dirPath);
        }

        //文件是否存在,且数据是符合JSON格式。

        try {
            JSON.parse(option.data);
            if (!fs.existsSync(realPath)){
                fs.writeFileSync(realPath, temp.replace(/\$json_template\$/, option.data));
            }
        } catch(e) {
            console.log(e.message);
        }

    }
}

module.exports = {
    check: check,
    save: save
};
