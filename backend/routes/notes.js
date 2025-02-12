const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const Notes = require('../modules/Notes')
const router = express.Router();
const { body, validationResult } = require('express-validator');

//Route 1)fetching all notes
router.get('/fetchnotes', fetchUser, async (req, res) => {
        try {
                const notes = await Notes.find({ user: req.user.id })
                res.json(notes);
        } catch (error) {
                console.error(error.message);
                return res.status(500).json({ error: "Internal Server Error" });
        }
});


//Route 3) Adding new note
router.post('/addnote', fetchUser, [
        body('title', 'Enter a valid Title').isLength({ min: 3 }),
        body('description', 'Enter some Description').isLength({ min: 5 }),
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

//Route 3) Updating an existing note, Login required
// router.put('/updatenote/:id', fetchUser, async (req, res) => {
//         const { title, description, tag } = req.body;
//         const newNote = {};
//         if (title) { newNote.title = title};
//         if (description) { newNote.description = description };
//         if (tag) { newNote.tag = tag };


//         let note = await Notes.findById(req.params._id);
//         if (!note) { return res.status(404).send("Not found") }

//         if (note.user.toString() !== req.user.id) {
//                 return res.status(401).send("Not Allowed");
//         }

//         note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, { new: true });
//         res.json({note});
// })
router.put('/updatenote/:id', fetchUser, async (req, res) => {
        try {
            const { title, description, tag } = req.body;
            const newNote = {};
            if (title) newNote.title = title;
            if (description) newNote.description = description;
            if (tag) newNote.tag = tag;
    
            // Fetch the note using the correct ID
            let note = await Notes.findById(req.params.id);
            if (!note) return res.status(404).send("Not found");
    
            // Check if the user owns this note
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not Allowed");
            }
    
            // Update the note
            note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
            res.json({ note });
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    });
    

 //Route 3) Deleting an existing note, Login required
router.delete('/deletenote/:id', fetchUser, async (req, res) => {
        const { title, description, tag} = req.body;
        let note = await Notes.findByIdAndDelete(req.params.id);
        if (!note) { return res.status(404).send("Not found") }

        if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({"Success": "Note has been Deleted"});
})

module.exports = router;     
