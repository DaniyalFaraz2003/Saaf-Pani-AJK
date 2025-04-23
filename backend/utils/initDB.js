const City = require('../models/city.model');
const SourceType = require('../models/sourceType.model');

// City data
const citiesData = [
  {
    name: 'Muzaffarabad (Capital)',
    locations: [
      { name: 'Nalochi' }, { name: 'Chattar' }, { name: 'Domel' }, 
      { name: 'Gojra' }, { name: 'Upper Plate' }, { name: 'Lower Plate' }, 
      { name: 'Madina Market' }, { name: 'Sathra' }
    ]
  },
  {
    name: 'Neelum Valley',
    locations: [
      { name: 'Athmuqam' }, { name: 'Sharda' }, { name: 'Kel' }, 
      { name: 'Taobat' }, { name: 'Dawarian' }, { name: 'Kundal Shahi' }, 
      { name: 'Kutton' }
    ]
  },
  {
    name: 'Bagh',
    locations: [
      { name: 'Dhirkot' }, { name: 'Sudhan Gali' }, { name: 'Kahuta' }, 
      { name: 'Mallot' }, { name: 'Hari Ghel' }, { name: 'Lass Danna' }
    ]
  },
  {
    name: 'Poonch (Rawalakot)',
    locations: [
      { name: 'Rawalakot Central' }, { name: 'Hajira' }, { name: 'Abbaspur' }, 
      { name: 'Trar Dewan' }, { name: 'Thorar' }, { name: 'Tain' }, 
      { name: 'Singola' }
    ]
  },
  {
    name: 'Kotli',
    locations: [
      { name: 'Sehnsa' }, { name: 'Charhoi' }, { name: 'Khuiratta' }, 
      { name: 'Fatehpur' }, { name: 'Seri' }, { name: 'Tatta Pani' }
    ]
  },
  {
    name: 'Bhimber',
    locations: [
      { name: 'Samahni' }, { name: 'Barnala' }, { name: 'Panjeri' }, 
      { name: 'Chowki' }, { name: 'Jatlan' }, { name: 'Khamba' }
    ]
  },
  {
    name: 'Mirpur',
    locations: [
      { name: 'Chakswari' }, { name: 'Islamgarh' }, { name: 'Dadyal' }, 
      { name: 'Mangla' }, { name: 'Afzalpur' }, { name: 'Khari Sharif' }
    ]
  },
  {
    name: 'Hattian Bala',
    locations: [
      { name: 'Hattian Town' }, { name: 'Chakar' }, { name: 'Leepa Valley' }, 
      { name: 'Bandi Abbaspur' }, { name: 'Chanjal' }, { name: 'Lamnian' }
    ]
  },
  {
    name: 'Haveli',
    locations: [
      { name: 'Forward Kahuta' }, { name: 'Khurshidabad' }, 
      { name: 'Hillan' }, { name: 'Bedori' }
    ]
  }
];

// Source types data
const sourceTypesData = [
  { name: 'Natural Spring' },
  { name: 'River' },
  { name: 'Stream (Nallah)' },
  { name: 'Glacial Meltwater' },
  { name: 'Rainwater Collection Pond' },
  { name: 'Filtration Plant' },
  { name: 'Water Supply Tank' },
  { name: 'Tube Well' },
  { name: 'Borewell' },
  { name: 'Hand Pump' },
  { name: 'Gravity Water Supply Scheme' },
  { name: 'Household RO Unit' },
  { name: 'Community Water Filter' },
  { name: 'Water Tanker Supply' }
];

async function initializeDatabase() {
  try {
    // Clear existing data
    await City.deleteMany({});
    await SourceType.deleteMany({});

    // Insert cities
    const insertedCities = await City.insertMany(citiesData);

    // Insert source types
    const insertedSourceTypes = await SourceType.insertMany(sourceTypesData);

    return {
      citiesCount: insertedCities.length,
      sourceTypesCount: insertedSourceTypes.length
    };
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}

module.exports = initializeDatabase;