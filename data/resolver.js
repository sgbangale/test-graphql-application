var casual = require("casual"),
dal = require("./db");


var resolver = {
  hello: () => {
    return 'Hello world!';
  },
  
  dice :(args)=>{
      return "this is output " +args.left +"  " + args.right;
  },
  
  person : (args)=>{
      
      return  {name : args.name,age : casual.integer(20,60) , gender : "Male",citylived: casual.city};
  },
  messages : (args)=>{
    return dal.Message.findAll();  
  },
  getMessage: (args) => {
     console.log(args);
    return {id:11,content:casual.sentence ,author:casual.first_name };
  },
  createMessage: function (args) {
      
      /*
      mutation {
  createMessage(input: {author: "kiran", content: "hope is a good thing"}) {
    id
    author,
    content
    
  }
}
*/

      
 var data =   dal.Message.create(args.input);
 return data;
  },
  updateMessage: function (args) {
   // if (!fakeDatabase[id]) {
     // throw new Error('no message exists with id ' + id);
    //}
    // This replaces all old data, but some apps might want partial update.
    //fakeDatabase[id] = input;
    return new Message(args.id, args.input);
  },
  
  };
  



module.exports = resolver;