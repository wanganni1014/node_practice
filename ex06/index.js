const crypto = require('crypto')
module.exports.createToken = token => {
    const ary = token.split('.')
    if (ary.length !== 3) {
        return
    }
    return {
        //! 暗号: 贪心算法
        getExp: () => {
            // const stringValue = new Buffer(ary[1], 'base64').toString();
            // const result = JSON.parse(stringValue);
            // return result.exp;
            // 或者直接
            return JSON.parse(Buffer.from(ary[1], 'base64')).exp;

            // !区别
            // 在v6.0之前创建Buffer对象直接使用new Buffer()构造函数来创建对象实例，
            // 但是Buffer对内存的权限操作相比很大，可以直接捕获一些敏感信息，
            // 所以在v6.0以后，官方文档里面建议使用 Buffer.from() 接口去创建Buffer对象。
        },

        verify: key => {
            const hmac = crypto.createHmac('SHA256', key).update(ary[0]+ '.' +  ary[1]).digest('base64');
            return hmac === ary[2] + '='
            
        }
    }
}
