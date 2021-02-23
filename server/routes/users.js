const router = require(`express`).Router()

const usersModel = require(`../models/users`)

const bcrypt = require('bcryptjs');  // needed for password encryption

router.get("/users/", (req, res) => {
  usersModel.find((error, data) => {
    res.json(data);
  });
});


// router.post('/signup',(req,res) => {
//     const signedUpUser = new usersModel({
//         firstName:req.body.firstName,
//         surname:req.body.surname,
//         email:req.body.email,
//         password:req.body.password
//     })
//     signedUpUser.save()
//     .then(data =>{
//         res.json(data)
//     })
//             .catch(error => {
//                 res.json(error)
//     })
// })

router.post(`users/register/:firstName/:surname/:email/:password`, (req, res) =>
{
   // If a user with this email does not already exist, then create new user
   usersModel.findOne({email: req.params.email}, (uniquerror, uniqueData) =>
   {
       if (uniqueData)
       {
           res.json({errorMessage: `User already exists`})
       } else
       {
           usersModel.create({firstName: req.params.firstName, surname: req.params.surname,email: req.params.email, password: req.params.password}, (error, data) =>
           {
               if (data)
               {
                   res.json({firstName: data.firstName})
               } else
               {
                   res.json({errorMessage: `User was not registered`})
               }
           })
       }
   })
})


module.exports = router


