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
router.get('/:id', getGraduate,(req,res) => {
    res.send(res.graduate);
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
router.patch('/:id',getGraduate, async (req,res) => {
    if (req.body.name != null){
        res.graduate.name = req.body.name
    }
    if (req.body.lastName != null){
        res.graduate.lastName = req.body.lastName
    }
    if (req.body.jobTitle != null){
        res.graduate.jobTitle = req.body.jobTitle
    }
    if (req.body.companyName != null){
        res.graduate.companyName = req.body.companyName
    }
    if (req.body.keySkills != null){
        res.graduate.keySkills = req.body.keySkills
    }
    if (req.body.linkedIn != null){
        res.graduate.linkedIn = req.body.linkedIn
    }
    if (req.body.gitHub != null){
        res.graduate.gitHub = req.body.gitHub
    }
    if (req.body.twitterName != null){
        res.graduate.twitterName = req.body.twitterName
    }
    try{
        const updatedGraduate = await res.graduate.save();
        res.json(updatedGraduate)
    }
 catch(err){
    res.status(400).json( { message: err.message})
 }    
})

//Deleting One 
router.delete('/:id', getGraduate, async (req,res) => {
    try {
        await res.graduate.remove();
        res.json({message:'Deleted Graduate'});
    }   catch (err) {
        res.status(500).json({ message: err.message })
    }
})


async function getGraduate(req,res,next){
   let graduate
    try{
        graduate = await Graduate.findById(req.params.id);
        if (graduate == null){
            return res.status(404).json({message: 'cannot find Graduate'})
        }
    } catch {
        return res.status(500).json({ message: err.message})
    }
    res.graduate = graduate
    next()
}

module.exports = router;