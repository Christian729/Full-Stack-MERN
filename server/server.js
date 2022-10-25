const express = require('express');
const cors = require('cors')// this syncs up our client and server easier
const app = express();
const port = 8000;
app.use(cors())// this is a short hand of-- require('./routes/person.routes')(app);
app.use(express.json()); // this posts the json objects

app.use(express.urlencoded({ extended: true })); // this allows json objects with strings and arrays
require('./config/mongoose.config');

require('./routes/person.routes')(app);
// this is simply a short-hand notation for code that looks like
// const personRoutes = require("./routes/person.routes");
// personRoutes(app);
// ALTHOUGH its probably easier to read, the main point is we're just importing the information from the routes section
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );

// IN ORDER TO RUN THE FS APP
// YOU NEED TWO SEPARATE TERMINALS
// one for the server
// one for the client