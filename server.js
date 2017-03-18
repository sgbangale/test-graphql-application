// server.js
var dotenv = require('dotenv'); // for configuration
dotenv.load();

var express = require("express"),
graphqlHttp = require("express-graphql");
schema = require("./data/schema"),
resolver = require("./data/resolver");


var app = express();
app.use('/graphql', graphqlHttp({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));
app.listen(process.env.api_port);
console.log('Running server @'+process.env.api_port);