const Sequelize = require('sequelize');


const sequelize  = new  Sequelize(

     process.env.DB_NAME,
     process.env.DB_USER,
     process.env.DB_PASS,
     {

        host:process.env.DB_HOST,
        dialect: "mysql",

     }

)

sequelize.authenticate().then(()=>{

    console.log("DATABASE CONNECTION SUCCESSFULLY");

}).catch(err=>{

    console.log("DATABASE CONNECTION ERROR");
    
})


module.exports = sequelize;
