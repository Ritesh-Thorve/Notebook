const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../modules/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser')
const JWT_SECRET = "ritesh";

// Route 1) to create a new user
router.post(
    '/createuser',
    [
        body('name', 'Enter a valid name').isLength({ min: 3 }),
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // Check if the user already exists with email
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "A user with this email already exists" });
            }
            // Create the user
            const salt = await bcrypt.genSalt(10);
            const securePass = await bcrypt.hash(req.body.password,salt)
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: securePass,
            });
            // Send success response
            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data,JWT_SECRET) 
            return res.status(201).json({authtoken});
        } catch (error) {
            console.error(error.message);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
);

//Route 2)Authenticating user with currect credentials : no login required
router.post(
    '/login',
    [
        body('email', 'Enter a valid email').isEmail(),
        body('password','Password can not be empty').exists(),   
    ],          
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //checking the user that exists or not for login
        const {email,password} = req.body;
        try{
            let user = await User.findOne({email})
            if(!user){
                return res.status(400).json({error: "Try to login with correct credentials"});
            }
            const comparePass = await bcrypt.compare(password,user.password);
            if(!comparePass){
                return res.status(400).json({error: "Try to login with correct credentials"});
            }

            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data,JWT_SECRET) 
            return res.status(201).json({authtoken});
        } catch(error){
            console.error(error.message);
            return res.status(500).json({ error: "Internal Server Error" });
        }
});


//Route 3)Get user data through login
router.post('/getuser', fetchUser, async (req,res) =>{
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        res.send(user);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Internal Server Error" });        
    }
})


module.exports = router;

 


