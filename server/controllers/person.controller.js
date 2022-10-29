const Person = require('../models/person.model');
module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
        message: "Hello World"
    });
}

module.exports.createPerson = (request, response) => {
    // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Person.create(request.body)
        .then(person =>  response.json(person))
        .catch(err => response.json(err));
}

module.exports.getAllPeople = (request, response) => { // this helps us get all our people 
    Person.find({})
        .then(persons => {
            response.json(persons)
            console.log(persons);

        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
    .then(person => response.json(person))
    .catch(err => response.json(err));
}


// WHEN ADDING A NEW METHOD 
// dont forget to update the route you wanna use

