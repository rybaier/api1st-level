require('dotenv').config();
const mongoose = require("mongoose");

const mongoURI = process.env.DATABASE_URL; //use this url when hosting a DB locally
const db = mongoose.connection;
console.log(mongoURI);
// mongoose.connect(mongoURI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// },
// () => {
//     console.log("connection with mongoDB is established");
// });

mongoose.connect(mongoURI);

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Open the Connection
db.on('open', () => {
	console.log('✅ mongo connection made!');
});

// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration and can be exported to other files
module.exports = mongoose;