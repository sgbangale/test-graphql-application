var casual = require("casual")
var resolver = {
  hello: () => {
    return 'Hello world!';
  },
  
  dice :(args)=>{
      return "this is output " +args.left +"  " + args.right;
  },
  
  person : (args)=>{
      
      return  {name : args.name,age : casual.integer(from = 20, to = 60) , gender : "Male",citylived: casual.city};
  }
  
  };
  



module.exports = resolver;