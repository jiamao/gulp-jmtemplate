
// https://github.com/jiamao/jm-template
// 接口查看原文档
const Stream = require('stream');
const path = require('path');
const jmtemplate = require('jm-template');


module.exports =  {
    // 预编译
    precompile: function(options) {
        let stream = new Stream.Transform({
            objectMode: true
        });
        options = options||{};
        stream._transform = function (file, unused, callback) {
            if (file.isBuffer()) {
                //console.log('replaceLine:', file.path);
                var content = file.contents.toString();
                options.path = file.path;
                if(!options.id) {
                    options.id = path.basename(file.path); // 默认id取文件名
                }
                content = jmtemplate.precompile(content, options);
                file.contents = new Buffer.from(content);
            }
            this.push(file);
            callback();
        };
        return stream;
    },
    // 渲染成dom，需要传入data
    render: function(options) {
        let stream = new Stream.Transform({
            objectMode: true
        });
        options = options||{};
        stream._transform = function (file, unused, callback) {
            jmtemplate.render(file.path, options, function(err, res) {
                if(!err) {
                    file.contents = new Buffer.from(res);
                }
                else {
                    throw err;
                }
                this.push(file);
                callback();
            });
        };
        return stream;
    }
}