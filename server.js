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
app.listen(8080);
console.log('Running a GraphQL API server at :8080/graphql');







