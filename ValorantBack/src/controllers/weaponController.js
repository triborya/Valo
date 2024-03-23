const Weapon = require("../models/weaponModel");
const CreateWeapon = async (req, res) => {
  try {
    const {name, weaponType, weaponClass, weaponDescription, weaponCost, weaponImage  } = req.body;
    const weapon = new Weapon({name, weaponType, weaponDescription, weaponClass, weaponCost, weaponImage });
    await weapon.save();
    res.status(201).send("create sucess");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getallweapons =async ( req, res) =>{
  try{
      const weapons = await Weapon.find();
      res.json(weapons);
  }catch (error) {
      res.status(500).send(error.message);
  }
};

module.exports = { CreateWeapon , getallweapons};
