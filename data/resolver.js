var casual = require("casual"),
  dal = require("./db");


var resolver = {
  hello: () => {
    return 'Hello world!';
  },

  dice: (args) => {
    return "this is output " + args.left + "  " + args.right;
  },

  person: (args) => {

    return {
      name: args.name,
      age: casual.integer(20, 60),
      gender: "Male",
      citylived: casual.city
    };
  },
  messages: (args) => {
    /*
    query
{
  messages {
    id
    content
    author
  }
}
*/
    return dal.Message.findAll();
  },
  getMessage: (args) => {

    return dal.Message.findOne({
      where: {
        id: args.id
      }
    });

  },
  createMessage: function(args) {
    /*
      mutation {
  createMessage(input: {author: "kiran", content: "hope is a good thing"}) {
    id
    author,
    content
  }
}
*/
    return dal.Message.create(args.input);
  },
  updateMessage: function(args) {
/*mutation
{
  updateMessage(id:3,input:{content:"awsome content",author : "purvaja"})
  {
    id
    content
    author
  }
}*/
    dal
      .Message.update(args.input, {
        where: {
          id: args.id
        }
      });
    return dal.Message.findOne({
      where: {
        id: args.id
      }
    });
  },

};




module.exports = resolver;
