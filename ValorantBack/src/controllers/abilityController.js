const Ability = require("../models/abilityModel");
const CreateAbility = async (req, res) => {
  try {
    const { name, description, typeability, imageAbility } = req.body;
    const ability = new Ability({
      name,
      description,
      typeability,
      imageAbility,
    });
    await ability.save();
    res.status(201).send("create sucess");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getallability =async ( req, res) =>{
  try{
      const abilitys = await Ability.find();
      res.json(abilitys);
  }catch (error) {
      res.status(500).send(error.message);
  }
};

module.exports = {CreateAbility ,  getallability}