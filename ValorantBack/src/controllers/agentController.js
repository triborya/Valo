const Agent = require("../models/agentModel");
const Ability = require("../models/abilityModel");

const CreateAgent = async (req, res) => {
  try {
    const {
      nomAgent,
      roleAgent,
      descriptionAgent,
      abilite,
      imageAgent,
      profilpicture,
      nomUlt,
      ultVideo,
    } = req.body;

    const agent = new Agent({
      nomAgent,
      roleAgent,
      descriptionAgent,
      profilpicture,
      abilite,
      imageAgent,
      nomUlt,
      ultVideo,
    });
    await agent.save();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getallagents = async (req, res) => {
  try {
    const agents = await Agent.find().populate("abilite");
    res.json(agents);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { CreateAgent, getallagents };
