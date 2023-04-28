
const jwt = require('jsonwebtoken');

function varifyToken(req,res,next){

    try {
        let token = req.headers['authorization'].split(" ")[1];
        let decoded = jwt.verify(token,"secret_key");
       // res.send(decoded)
        next();
      } catch(err){
        res.status(401).send({error:"Authentication Failed"})
      }
      
     
     

}


module.exports = varifyToken;

