const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storesSchema = new Schema({
  storeName: { type: String },
  address: { type: String },
  number: { type: String },
  neighborhood: { type: String },
  location: { type: { type: String }, coordinates: [Number] },
  city: { type: String },
  state: { type: String },
  cep: { type: String },
});

storesSchema.index({ location: '2dsphere' });

const Stores = mongoose.model('Stores', storesSchema);

module.exports = Stores;
