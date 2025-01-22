const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../modules/User');

// Route to create a new user
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
            // Check if the user already exists
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "A user with this email already exists" });
            }
            // Create the user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });
            // Send success response
            return res.status(201).json(user);
        } catch (err) {
            console.error(err.message);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
);

module.exports = router;




