const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')
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
        } else {
            let isPasswordValid = bcryptjs.compareSync(req.body.password, user.password);

            if (!isPasswordValid) {
                res.send({ auth: false, msg: 'Invalid password' })
            } else {
                const expiryTime = 60;
                const token = jwt.sign({ id: user._id }, 'MySecretKey', { expiresIn: expiryTime });
                res.send({ auth: true, token: token, expiresIn: expiryTime })
            }
        }
    } catch (err) {
        res.send({ auth: false, msg: 'Error While Logging in' })
    }
});
authRouter.get('/userInfo', async (req, res) => {
    console.log('userInfo route')
    const token = req.headers['my-token'];
    if (!token) {
        res.send({ auth: false, msg: 'No Token Found, please pass token' })
    } else {

        jwt.verify(token, 'MySecretKey', async function (err, response) {
            if (err) {
                res.send({ auth: false, msg: 'Invalid Token' })
            }
            if(response){
                console.log(response)
                let userInfo = await UserModel.findById(response.id);
                res.send(userInfo);
            }
        })
    }
});

module.exports = authRouter;