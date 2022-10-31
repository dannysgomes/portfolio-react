import pic from "../images/Proj1.png";

const ProjectCard = (props) => {
  const { index } = props;
  const { imgUrl, technologies, title } = props.project;
  const { handleModal } = props;

  const skills = technologies.map((skill) => {
    const cleanSkill = skill.toLowerCase();
    let color;
    switch (true) {
      case cleanSkill === "html":
        color = "#0399ff";
        break;
      case cleanSkill === "css":
        color = "#ff9904";
        break;
      case cleanSkill === "javascript":
        color = "green";
        break;
      case cleanSkill === "sass":
        color = "purple";
        break;
      default:
        color = "#0399ff";
    }
    return <li style={{ backgroundColor: color }}>{skill}</li>;
  });

  return (
    <>
      <div key={title} className="card pcard">
        <h2>Project {index + 1}</h2>
        <h3>{title}</h3>
        <img className="classthumb" src={imgUrl} />
        <ul className="skills">{skills}</ul>
        <button className="modal-button" onClick={() => handleModal(index)}>
          More Info
        </button>
      </div>
    </>
  );
};

export default ProjectCard;
