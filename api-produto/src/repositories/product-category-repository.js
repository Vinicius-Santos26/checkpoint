const mongoose = require('mongoose');
const ProductCategory = mongoose.model('ProductCategory');

exports.listAll = async () => {
  const result = await ProductCategory.find({}, '_id category department active');

  return result;
}

exports.create = async (data) => {
  let categoria = ProductCategory(data);
  await categoria.save();
}

exports.update = async (id, data) => {
  await ProductCategory.findByIdAndUpdate(id, {
    $set: {
      category: data.category,
      department: data.department,
      active: data.active
    }
  });
}

exports.getById = async (id) => {
  const result = await ProductCategory.findOne({_id: id}, '_id category department active');

  return result;
}

exports.delete = async(id) => {
  await ProductCategory.findByIdAndUpdate(id, {
    $set: {  
      active: false
    }
  });
}