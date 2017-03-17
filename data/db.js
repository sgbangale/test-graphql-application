var sql = require("sequelize");

var db = new sql.Sequelize('blog', null, null, {
  dialect: 'sqlite',
  storage: './blog.sqlite'
});


var MessageModel = db.define('message', {
    id:{
        type : db.Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
  content: {
    type:db. Sequelize.TEXT,
  },
  author: {
    type:db.Sequelize.STRING,
  },
});



//db.sync({ force: true })


module.exports = {Message :db.models.message };