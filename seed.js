const mongoose = require('mongoose');
const Stores = require('./models/stores');

const dbtitle = 'hackaton-ironhack';
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
      coordinates: ['-46.6623271', '-23.5617326'],
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
      coordinates: ['-46.6615105', '-23.5585757'],
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
      coordinates: ['-46.6634952', '-23.558779'],
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
      coordinates: ['-46.6547006', '-23.5643488'],
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
      coordinates: ['-46.5581647', '-23.6163362'],
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
      coordinates: ['-46.6230304', '-23.6309083'],
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
      coordinates: ['-46.7719213', '-23.5464799'],
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
      coordinates: ['-46.7805996', '-23.5916636'],
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
      coordinates: ['-46.6490426', '-23.5396795'],
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
      coordinates: ['-46.644993', '-23.559155'],
    },
    city: 'Carapicuiba',
    state: 'SP',
    cep: '06311-000',
  },
  {
    storeName: 'SuperFood',
    address: 'Av. Antonio Piranga',
    number: '171',
    neighborhood: 'Centro',
    location: {
      type: 'Point',
      coordinates: ['-46.622707', '-23.686251'],
    },
    city: 'Diadema',
    state: 'SP',
    cep: '09911-160',
  },
  {
    storeName: 'SuperFood',
    address: 'Av. Vital Brasil',
    number: '1133',
    neighborhood: 'Butantã',
    location: {
      type: 'Point',
      coordinates: ['-46.7151041', '-23.5694623'],
    },
    city: 'São Paulo',
    state: 'SP',
    cep: '05503-001',
  },
  {
    storeName: 'SuperFood',
    address: 'Av. Alcantara Machado',
    number: '576',
    neighborhood: 'Bras',
    location: {
      type: 'Point',
      coordinates: ['-46.6193709', '-23.5530546'],
    },
    city: 'São Paulo',
    state: 'SP',
    cep: '03102-000',
  },
  {
    storeName: 'SuperFood',
    address: 'Av. Imirim',
    number: '1217',
    neighborhood: 'Imirim',
    location: {
      type: 'Point',
      coordinates: ['-46.6462815', '-23.4944008'],
    },
    city: 'São Paulo',
    state: 'SP',
    cep: '02465-100',
  },
  {
    storeName: 'SuperFood',
    address: 'Av. Roque Petroni Junior',
    number: '1089',
    neighborhood: 'Jardim das Acacias',
    location: {
      type: 'Point',
      coordinates: ['-46.6980466', '-23.6215123'],
    },
    city: 'São Paulo',
    state: 'SP',
    cep: '04707-000',
  },
];


Stores.create(stores, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${stores.length} entries in the stores database`);
  mongoose.connection.close();
});