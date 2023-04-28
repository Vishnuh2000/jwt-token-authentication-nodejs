const express = require('express');

const app = express();

require('dotenv').config()

const sequelize = require('./db/db')

require('./config/dbConfig')
require('./model/User')

const router = require('./controller/user.controller')

const cors = require('cors')

app.use(express.json());
app.use(cors());
app.use('/' , router)



const port = process.env.PORT || 3000;
app.listen(port , ()=>{

     console.log(`server starting at http://localhost:${port}`);

})



