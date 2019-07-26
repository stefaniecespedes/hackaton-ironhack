const mongoose = require('mongoose');
const Admin = require('./models/admin');

const dbtitle = 'hackaton-ironhack';
mongoose.connect(`mongodb://localhost/${dbtitle}`);
Admin.collection.drop();


const admin = [
  {
    username: 'admin@avocado.com',
    password: '$2b$10$xGlY9pVNEwrRKm6QqAuSEu7xdTacVk2PIcCbMZ1noUo7w5v4dSd2W',
  },
];

Admin.create(admin, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${admin.length} entries in the stores database`);
  mongoose.connection.close();
});