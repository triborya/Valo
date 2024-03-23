import { Link } from "react-router-dom";
import HeaderTwo from "../components/HeaderTwo";
import React, { useState } from "react";

const ConnexionPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:1804/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.log("Error logging in : ", error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <>
      <section className="AuthSection">
        <HeaderTwo />
        <form className="FormAuth" onSubmit={handleSubmit}>
          <div className="Inputform">
            <h5>Email :</h5>
            <input
              required
              type="text"
              class="prompt"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="Inputform">
            <h5>Mot de Passe :</h5>
            <input
              required
              type={showPassword ? "text" : "password"}
              class="prompt"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
             <button className="hidepsw" type="button" onClick={toggleShowPassword}>
              {showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            </button>
          </div>
          <div className="ButtonAuth">
            <button type="submit" className="Submit">Envoyez</button>
          </div>
          <div className="ConnexionInscription">
            <p className="Question"> Tu n'as pas encore de compte ?</p>
            <Link to={"/inscription"} className="linkAuth">
              Cliquez ici
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default ConnexionPage;
