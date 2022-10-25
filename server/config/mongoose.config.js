const mongoose = require('mongoose');
// this creates a db named 'Person' if one doesnt already exist 
//(no need for a mongo shell)

mongoose.connect("mongodb://localhost/person", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database",
    err));