const mongoose = require('mongoose');

// Création du schéma
const schema = new mongoose.Schema({
    insee_code: String,
    city_code: String,
    zip_code: String,
    label: String,
    latitude: String,
    longitude: String,
    department_name: String,
    department_number: String,
    region_name: String,
    region_geojson_name: String,
});
  
  // Création du modèle
  const City = mongoose.model('City', schema);
  module.exports = City;
