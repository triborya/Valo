import { Link } from "react-router-dom";
import HeaderTwo from "../components/HeaderTwo";
import React, { useState } from "react";

const AuthPage = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:1804/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          userEmail,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error registering user:", error);
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
            <h5>Pseudo :</h5>
            <input
              required
              type="text"
              className="prompt"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="Inputform">
            <h5>Email :</h5>
            <input
              required
              type="text"
              className="prompt"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="Inputform">
            <h5>Mot de Passe :</h5>
            <input
              required
              type={showPassword ? "text" : "password"}
              className="prompt"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="hidepsw"
              type="button"
              onClick={toggleShowPassword}
            >
              {showPassword
                ? "Masquer le mot de passe"
                : "Afficher le mot de passe"}
            </button>
          </div>
          <div className="ButtonAuth">
            <Link to={"/connexion"} className="linkAuth">
              <button type="submit" className="Submit">
                Envoyez
              </button>
            </Link>
          </div>
          <div className="ConnexionInscription">
            <p className="Question"> Tu as déjà un compte ?</p>
            <Link to={"/connexion"} className="linkAuth">
              Cliquez ici
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default AuthPage;
