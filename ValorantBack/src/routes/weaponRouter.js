const express = require('express');
const router = express.Router() 
const { CreateWeapon, getallweapons} = require('../controllers/weaponController')

router.post ("/createweapon", CreateWeapon)
router.get ("/all", getallweapons)

module.exports = router 