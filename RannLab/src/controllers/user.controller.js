const express = require('express');
const router = express.Router();
const User = require('../models/user.model');


router.post("/register", (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(user => {
            res.send(user);
        }).catch(err => {
            res.status(400).send(err);
        });
});


router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                res.status(404).send("User not found");
            } else {
                if (user.password === req.body.password) {
                    res.send(user);
                } else {
                    res.status(401).send("Password is incorrect");
                }
            }
        }).catch(err => {
            res.status(400).send(err);
        });
});


router.get("/", (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(400).send(err);
        });
}
);


module.exports = router;