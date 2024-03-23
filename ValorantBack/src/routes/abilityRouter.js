const express = require('express');
const router = express.Router() 
const { CreateAbility, getallability} = require('../controllers/abilityController')

router.post ("/createability", CreateAbility);
router.get("/all", getallability);

module.exports = router 