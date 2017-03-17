var  buildSchema  = require('graphql');


var schema =new buildSchema.buildSchema (`
  type Query {
    hello: String
    dice(left: Int,right : String) : String
    person(name: String) : Person
    getMessage(id: ID!): Message
    messages : [Message]
  }
  
  type Person
  {
    name: String!
    age: Int
    gender: String
    citylived: String
    
  }
  
  type Message {
  id: ID!
  content: String
  author: String
}

input MessageInput {
  content: String
  author: String
}

type Mutation {
  createMessage(input: MessageInput): Message
  updateMessage(id: ID!, input: MessageInput): Message
}
`);

module.exports = schema;
