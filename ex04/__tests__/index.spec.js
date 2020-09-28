const Sequelize = require('sequelize');
const conf = require("../util/conf")
test('练习04 完成一个一对多查询', async () => {

    const sequelize = new Sequelize(conf.database, conf.username, conf.password, {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: true,
        // 关闭执行日志
        logging: false
    });
    
    // 初始化模型
    const { initModel } = require('../util/index')
    const { Product, User } = await initModel(sequelize)

    // 设置数据
    user = await User.create({
        name: 'Tom',
    })
    await user.createProduct({
        title: '商品一'
    })
    await user.createProduct({
        title: '商品二'
    })
    const ret = await Product.findAll({
        attributes: ['title']
    })
    expect(JSON.parse(JSON.stringify(ret))).toEqual([{"title": "商品一"}, {"title": "商品二"}])
})