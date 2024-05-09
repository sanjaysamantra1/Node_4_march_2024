const express = require('express');
const bcryptjs = require('bcryptjs');
const UserModel = require('../model/UserSchema');
const authRouter = express.Router();

// Register
authRouter.post('/register', async (req, res) => {
    const payLoad = req.body;
    payLoad.token = '';
    payLoad.password = bcryptjs.hashSync(payLoad.password, 8);
    const newUser = new UserModel(payLoad);
    await newUser.save();
    res.send('User Added Successfully');
});
// Login
authRouter.post('/login', async (req, res) => {
    try {
        let user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
            res.send({ auth: false, msg: 'User Not found, Please register First' })
        }else{
            res.send('user found')
        }
    } catch (err) {
        res.send({ auth: false, msg: 'Error While Logging in' })
    }
});

module.exports = authRouter;