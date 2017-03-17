var resolver = {
  hello: () => {
    return 'Hello world!';
  },
  
  dice :(_,args,v)=>{
      return "this is output " +args.left +"  " + args.right;
  },
  };
  



module.exports = resolver;