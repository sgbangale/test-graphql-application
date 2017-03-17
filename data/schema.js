var  buildSchema  = require('graphql');


var schema =new buildSchema.buildSchema (`
  type Query {
    hello: String
    dice(left: Int,right : String) : String
    person(name: String) : Person
  }
  
  type Person
  {
    name: String!
    age: Int
    gender: String
    citylived: String
    
  }
`);

module.exports = schema;
