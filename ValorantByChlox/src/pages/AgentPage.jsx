import "../AgentPage.css";
import axios from "axios";
import HeaderTwo from "../components/HeaderTwo";
import React, { useState, useEffect } from "react";

function AgentPage() {
  const [agents, setAgents] = useState([]);
  const [selectedAgentImage, setSelectedAgentImage] = useState(null);
  const [selectedAgentDescription, setSelectedAgentDescription] =
    useState(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:1804/agent/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAgents(response.data);
      } catch (error) {
        console.error("Error fetching agents", error);
      }
    };
    fetchAgents();
  }, []);

  const handleProfilPictureClick = (imageAgent, descriptionAgent) => {
    setSelectedAgentImage(imageAgent);
    setSelectedAgentDescription(descriptionAgent);
  };

  return (
    <>
      <section
        className="AgentPage"
        style={{ backgroundImage: `url(${selectedAgentImage})` }}
      >
        <HeaderTwo />
        <section className="allAgents">
          {agents.map((agent) => (
            <div className="ListAgent" key={agent._id}>
              <img
                className="agentprofil"
                src={agent.profilpicture}
                alt={`Image of ${agent.nomAgent}`}
                onClick={() =>
                  handleProfilPictureClick(
                    agent.imageAgent,
                    agent.descriptionAgent
                  )
                }
              />
            </div>
          ))}
        </section>
        {selectedAgentDescription && (
          <div className="descriptionContainer">
            <p className="description">{selectedAgentDescription}</p>
          </div>
        )}
      </section>
    </>
  );
}

export default AgentPage;
