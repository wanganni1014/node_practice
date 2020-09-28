const Product = require('../models/product');
const User = require('../models/user');
module.exports.initModel = async sequelize => {

  //! 暗号: 哈希算法
  Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
  });
  User.hasMany(Product);

  ret = await sequelize.sync();
  return { User, Product };
      
} 
