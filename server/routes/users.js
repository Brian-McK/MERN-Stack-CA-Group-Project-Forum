const router = require(`express`).Router();

const usersModel = require("../models/users");
const bcrypt = require("bcryptjs");

router.get("/users/", (req, res) => {
  usersModel.find((error, data) => {
    return res.json(data);
  });
});

router.post("/users/register/:firstName/:surname/:email/:password/",
  (req, res) => {
    // If a user with this email does not already exist, then create new user
    usersModel.findOne(
      { email: req.params.email },
      (uniqueError, uniqueData) => {
        if (uniqueData) {
          res.json({ errorMessage: `User already exists` });
        } else {
          bcrypt.hash(
            req.params.password,
            parseInt(process.env.PASSWORD_HASH_SALT_LENGTH),
            (err, hash) => {
              usersModel.create(
                {
                  firstName: req.params.firstName,
                  surname: req.params.surname,
                  email: req.params.email,
                  password: hash,
                },
                (error, data) => {
                  if (data) {
                    return res.json({
                      firstName: data.firstName,
                      isRegistered: true,
                    });
                  } else {
                    res.json({ errorMessage: `User was not registered` });
                  }
                }
              );
            }
          );
        }
      }
    );
  }
);

router.post(`/users/login/:email/:password`, (req, res) => {
  usersModel.findOne({ email: req.params.email }, (error, data) => {
    if (data) {
      bcrypt.compare(req.params.password, data.password, (err, result) => {
        if (result) {
          res.json({ firstName: data.firstName, isLoggedIn: true });
        } else {
          res.json({ errorMessage: `User is not logged in` });
        }
      });
    } else {
      console.log("not found in db");
      res.json({ errorMessage: `User is not logged in` });
    }
  });
});

// Delete one record
router.delete(`/users/delete_user/:id`, (req, res) => {
  usersModel.findByIdAndRemove(req.params.id, (error, data) => {
    res.json(data);
  });
});

router.post(`/users/logout`, (req, res) => {
  res.json({});
});

module.exports = router;
