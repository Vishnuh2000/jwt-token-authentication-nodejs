const express = require('express');
const router = express.Router();
const bCrypt = require('bcrypt');
const User = require('../model/User');
const jwt = require('jsonwebtoken')

const varifyToken = require('../middleware/jwtTokenValidation');



router.post('/register', async (req, res) => {


    let passwordBcrypt = await bCrypt.hash(req.body.password, 10)

    let userObj = {

        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: passwordBcrypt
    }

    let userIsExits = await User.findOne({ where: { email: userObj.email } });
    if (userIsExits) {

        
        res.send("User With this email Address is already exits")
       
      

    } else {

        let createUser = await User.create(userObj);
        res.send({ user: createUser })

    }


});



router.post('/login', async (req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    await User.findOne({ where: { email: email } }).then(isUser => {

        console.log("user is : ", isUser);

        if (isUser) {

            bCrypt.compare(password, isUser.password, (err, response) => {

                if (!err) {

                    if (response) {

                        let token = jwt.sign({ id: isUser.id, email: isUser.email }, "secret_key", { expiresIn: '1h' })

                        res.send({ auth: true, data: { token, response, isUser } })

                    } else if (!response) {

                        res.send({ auth: true, data: { isUser, response } })

                    }

                }

            })

        }

    }).catch((err) => {

        req.send({ status: 'error', data: 'Somethig Wrong' })

    })

})

router.get('/geAllUsers', varifyToken,(req, res) => {

    User.findAll().then((data) => {

        res.send(data);

    }).catch(err => {

        res.send(err)

    })

})

router.get("/edit/:id" ,(req , res)=>{

    let id = req.params.id;
    console.log(id);
    User.findOne({where:{id:id}}).then((data)=>{

        res.send(data)
        console.log(data);

    }).catch((err)=>{

        res.send("Error")
        console.log('error',err);

    });

})

router.put('/update/:id' , async(req,res)=>{


     let id = req.params.id;
     await User.update(req.body,{where:{id:id}}).then((data)=>{

        res.send(data);

     }).catch(err=>{

         res.send(err);

     })
     
     

})

router.delete('/delete/:id' , async(req,res)=>{

    let id = req.params.id;
    await User.destroy({where:{id:id}}).then(data=>{

        res.send("delete successfully")

    }).catch((err)=>{

        res.send(err)

    })

})


module.exports = router;