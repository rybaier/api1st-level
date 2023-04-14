
const locationSeeds = require('./LocationSeed.json')
const Location = require('./models/Location')
Location.deleteMany({})//delete them all 
Location.insertMany(locationSeeds)
    .then(console.log)
    .catch(console.error)
    .finally(() => { process.exit() }) 

