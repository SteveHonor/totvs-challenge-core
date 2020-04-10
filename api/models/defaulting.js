const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const DefaultingSchema = new Schema({
 name: {
  type: String,
  trim: true,
  required: true,
 },
 price: {
  type: Number,
  default: 0,
  required: true,
 },
 dueDate: {
  type: Date,
  trim: true,
  required: true
 }
});

DefaultingSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('defaulting', DefaultingSchema, 'Defaulting')
