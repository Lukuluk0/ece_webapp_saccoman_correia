const express = require('express')
const router = express.Router()
const path = require('path')

router.use((req,res,next) => {
    console.log('Time: ', Date.now())
    next()
})
router.get('/hello/user/:id', (req, res, next) => {
    if (req.params.id === 'Alexandre' || req.params.id === 'Lucas')
    {
        res.sendFile(path.join(__dirname, '/profil.html'))
    }
    else
   {
    res.sendFile(path.join(__dirname, '/hello.html'))
  }})

module.exports = router