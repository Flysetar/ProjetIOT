const mongoose = require('mongoose');
const uri = 'mongodb://PVaisseau:PVaisseau@b4s13b.stackhero-network.com:27017/PVaisseau';
const City = require('./models/city');
const cities = require('./cities.json');

const connectDatabase = () => {
  mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   }).then(con => {
      console.log(`MongoDB Database connected with host ${con.connection.host} : ✌️`);
  })
}


const seedProducts = async () => {
  await City.deleteMany();
  console.log('Suppression réussi :✌️');

  await City.insertMany(cities.cities);
  console.log("Insertion réussi : ✌️");
}

const getCityByName = async (cityName) => {
  const res = await City.findOne({label:cityName});

  const res2 = await City.findById(res._id);
  console.log(res.department_name);
  console.log(res2);
}


async function countCitiesByDepartment() {
  const results = await City.aggregate([
    {
      $group: {
        _id: '$department_name',
        count: { $sum: 1 }
      }
    }
  ]);
  return results;
}

connectDatabase();
//seedProducts();
getCityByName("roupy");

countCitiesByDepartment()
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });