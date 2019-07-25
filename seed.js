const mongoose = require('mongoose');
const Stores = require('./models/celebrity');

const dbtitle = 'mongoose-project';
mongoose.connect(`mongodb://localhost/${dbtitle}`);
Stores.collection.drop();


const stores = [
  {
    storeName: 'SuperFood',
    address: 'Alameda Jau',
    number: '1301',
    neighborhood: 'Jardim Paulista',
    location: {
      type: 'Point',
      coordinates: [-46.6623271, -23.5617326],
    },
    city: 'São Paulo',
    state: 'SP',
    cep: '01420-001',
  },
  {
    storeName: 'SuperFood',
    address: 'Av. Paulista',
    number: '2034',
    neighborhood: 'Bela Vista',
    location: {
      type: 'Point',
      coordinates: [-46.6615105, -23.5585757],
    },
    city: 'São Paulo',
    state: 'SP',
    cep: '01310-200',
  },
  {
    storeName: 'SuperFood',
    address: 'R. Augusta',
    number: '1856',
    neighborhood: 'Cerqueira Cesar',
    location: {
      type: 'Point',
      coordinates: [-46.6634952, -23.558779],
    },
    city: 'São Paulo',
    state: 'SP',
    cep: '01412-000',
  },
  {
    storeName: 'SuperFood',
    address: 'R. Pamplona',
    number: '734',
    neighborhood: 'Jardim Paulista',
    location: {
      type: 'Point',
      coordinates: [-46.6634952, -23.558779],
    },
    city: 'São Paulo',
    state: 'SP',
    cep: '01405-001',
  },
  {
    storeName: 'SuperFood',
    address: 'Av. Goias',
    number: '1805',
    neighborhood: 'Santa Paula',
    location: {
      type: 'Point',
      coordinates: [-46.6634952, -23.558779],
    },
    city: 'São Caetano do Sul',
    state: 'SP',
    cep: '09550-050',
  },
  {
    storeName: 'SuperFood',
    address: 'R. Mal. Deodoro',
    number: '1332',
    neighborhood: 'Centro',
    location: {
      type: 'Point',
      coordinates: [-46.6634952, -23.558779],
    },
    city: 'São Bernardo do Campo',
    state: 'SP',
    cep: '09710-002',
  },
  {
    storeName: 'SuperFood',
    address: 'R. Aurora Soares Barbosa',
    number: '775',
    neighborhood: 'Vila Campesina',
    location: {
      type: 'Point',
      coordinates: [-46.6634952, -23.558779],
    },
    city: 'Osasco',
    state: 'SP',
    cep: '06032-010',
  },
  {
    storeName: 'SuperFood',
    address: 'R. Waldir de Azevedo',
    number: '20',
    neighborhood: 'Jardim Bom',
    location: {
      type: 'Point',
      coordinates: [-46.6634952, -23.558779],
    },
    city: 'Guarulhos',
    state: 'SP',
    cep: '07122-170',
  },
  {
    storeName: 'SuperFood',
    address: 'R. Sebastião Pereira',
    number: '245',
    neighborhood: 'Vila Buarque',
    location: {
      type: 'Point',
      coordinates: [-46.6634952, -23.558779],
    },
    city: 'São Paulo',
    state: 'SP',
    cep: '01225-020',
  },
  {
    storeName: 'SuperFood',
    address: 'Av. Rui Barbosa',
    number: '409',
    neighborhood: 'Vila Caldas',
    location: {
      type: 'Point',
      coordinates: [-46.6634952, -23.558779],
    },
    city: 'Carapicuiba',
    state: 'SP',
    cep: '06311-000',
  },
  {
    storeName: 'SuperFood',
    address: 'Av. Rui Barbosa',
    number: '409',
    neighborhood: 'Vila Caldas',
    location: {
      type: 'Point',
      coordinates: [-46.6634952, -23.558779],
    },
    city: 'Carapicuiba',
    state: 'SP',
    cep: '06311-000',
  },
  {
    storeName: 'SuperFood',
    address: 'Av. Antonio Piranga',
    number: '409',
    neighborhood: 'Vila Caldas',
    location: {
      type: 'Point',
      coordinates: [-46.6634952, -23.558779],
    },
    city: 'Carapicuiba',
    state: 'SP',
    cep: '06311-000',
  },

];


Stores.create(stores, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${stores.length} entries in the stores database`);
  mongoose.connection.close();
});