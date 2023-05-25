const express = require('express')

const router = express.Router()

router.get('/', async (req,res,next)=>{
    res.json('gettin all cars')
})
router.get('/:id', async (req,res,next)=>{
    res.json('getting car by id')
})
router.post('/', async (req,res,next)=>{
    res.json('posting new car')
})


module.exports = router