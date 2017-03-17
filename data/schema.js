var  buildSchema  = require('graphql');


var schema =new buildSchema.buildSchema (`
  type Query {
    hello: String
    dice(left: Int,right : String) : String
  }
`);

module.exports = schema;
