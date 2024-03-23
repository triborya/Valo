function AgentsProfils(props) {
  return (
    <>
      <a href="" onClick={props.newBck}>
        <div className="AgentCase">
          <div
            className="photoProfil"
            style={{ backgroundImage: `url(${props.imageUrl})` }}
          ></div>
          <h6>{props.name}</h6>
        </div>
      </a>
    </>
  );
}

export default AgentsProfils;
