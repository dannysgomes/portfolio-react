import pic from "../images/Proj1.png";

const ProjectCard = (props) => {
  const { index } = props;
  const { imgUrl, technologies, title } = props.project;
  const { handleModal } = props;

  return (
    <>
      <div key={title} className="card pcard">
        <h2>Project {index + 1}</h2>
        <h3>{title}</h3>
        <img className="classthumb" src={imgUrl} />
        <ul className="skills">{technologies.join(" ")}</ul>
        <button className="modal-button" onClick={() => handleModal(index)}>
          More Info
        </button>
      </div>
    </>
  );
};

export default ProjectCard;
