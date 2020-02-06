const express = require('express')
const router = express.Router()
const Graduate = require ('../models/graduate');

//Getting All
router.get('/', async (req,res) => {
   try{
    const graduates = await Graduate.find()
    res.json(graduates);
   } catch (err){
    res.status(500).json({message: err.message })
   }
})
//Getting One
router.get('/:id', (req,res) => {
    res.send(req.params.id);
})

//Creating One 
router.post('/', async (req,res) => {
    const graduate = new Graduate({
        name:req.body.name,
        lastName:req.body.lastName,
        jobTitle:req.body.jobTitle,
        companyName:req.body.companyName,
        keySkills:req.body.keySkills,
        linkedIn:req.body.linkedIn,
        gitHub:req.body.gitHub,
        twitterName:req.body.twitterName
    })
    try{
        const newGraduate = await graduate.save();
        res.status(201).json(newGraduate)
    } catch(err) {
        res.status(400).json({message: err.message})
    }
})

//Updating One 
router.patch('/:id', (req,res) => {

})

//Deleting One 
router.delete('/:id', (req,res) => {

})


module.exports = router;