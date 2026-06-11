const Product = require('./product.model');
const Category = require('./category.model');
const { Op } = require('sequelize');
const sequelize = require('../../config/db');

class ProductRepository {
  async findAll({ categoryId, category, search, page = 1, limit = 40 }) {
    const isSqlite = sequelize.options.dialect === 'sqlite';
    const likeOp = isSqlite ? Op.like : Op.iLike;

    const offset = (page - 1) * limit;
    const where = {};
    const include = [{ model: Category, attributes: ['name'] }];

    if (search) {
      where[Op.or] = [
        { name: { [likeOp]: `%${search}%` } },
        { description: { [likeOp]: `%${search}%` } }
      ];
    }

    // Support filtering by category name string (from navbar links) or by ID
    if (category && isNaN(category)) {
      // It's a category name string — filter via include
      include[0].where = { name: { [likeOp]: `%${category}%` } };
      include[0].required = true;
    } else if (category || categoryId) {
      where.category_id = category || categoryId;
    }

    const { rows, count } = await Product.findAndCountAll({
      where,
      include,
      limit,
      offset,
      order: [['created_at', 'DESC']]
    });

    return { data: rows, total: count, page, limit };
  }

  async findById(id) {
    return Product.findByPk(id, { include: [Category] });
  }
}

module.exports = new ProductRepository();
