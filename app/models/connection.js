const mongoose = require('mongoose');
    // cache URI
const dbURI = process.env.MONGODB_URI;

// use default promises
mongoose.Promise = global.Promise;

mongoose.connect(dbURI)
    .then( () => {
        console.log(`Successfully connected to ${dbURI}`);
    })
    .catch( (err) => {
        console.log(`ERROR unsuccessful connection to ${dbURI}. Error = ${err}`);
    });

// shut down
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose successfully shut down.');
});
