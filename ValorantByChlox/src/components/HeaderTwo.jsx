import { Link } from "react-router-dom";

function HeaderTwo() {
  return (
    <>
      <section className="header">
        <div className="headerPart">
          <Link to={"/agents"} className="linkHeader">
            AGENTS
          </Link>
          <Link to={"/armes"} className="linkHeader">
            ARSENAL
          </Link>
        </div>
        <Link to={"/acceuil"} >
            <img
            className="logo"
            src="src/assets/images/logo/logoValo.png"
            alt="logo du jeu Valorant de Riot games"
            />
        </Link>
        <div className="headerPart">
          <Link to={"/connexion"} className="linkHeader">
            CONNEXION
          </Link>
          <Link to={"/inscription"} className="linkHeader">
            INSCRIPTION
          </Link>
        </div>
      </section>
    </>
  );
}

export default HeaderTwo;
