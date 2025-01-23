const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const Notes = require('../modules/Notes')
const router = express.Router();
const { body, validationResult } = require('express-validator');

//Route 1)geting notes of user
router.get('/fetchnotes', fetchUser, async (req, res) => {
        try {
                const notes = await Notes.find({ user: req.user.id })
                res.json(notes);
        } catch (error) {
                console.error(error.message);
                return res.status(500).json({ error: "Internal Server Error" });
        }
});


//Route 2)adding note
router.post('/addnote', fetchUser, [
        body('title', 'Enter a valid Title').isLength({ min: 3 }),
        body('description', 'Enter some Description').isLength({ min : 5}),
],
        async (req, res) => {
                try {
                        const { title, description, tag } = req.body;
                        const errors = validationResult(req);
                        if (!errors.isEmpty()) {
                                return res.status(400).json({ errors: errors.array() });
                        }
                        const note = new Notes({
                                title, description, tag, user: req.user.id
                        });
                        const saveNote = await note.save();
                        res.json(saveNote);
                } catch (error) {
                        console.error(error.message);
                        return res.status(500).json({ error: "Internal Server Error" });
                }

        });
 



module.exports = router;    