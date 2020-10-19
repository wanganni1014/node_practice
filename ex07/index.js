const fs = require('fs')
module.exports.createLoader = config => {
    const loader = (scanFolder, cb) => {
        const files = fs.readdirSync(scanFolder);
        files.forEach(filename => {
            filename = filename.replace(".js", "");
            const file = require(scanFolder + "/" + filename);
            cb(filename, file);
        })
    }

    return {
        // !暗号: 分治算法
        initFunction: scanFolder => {
            const ret = {}
            loader(scanFolder, (filename, file) => {
                ret[filename] = file(config)
            });
            return ret
        }
    }
}

