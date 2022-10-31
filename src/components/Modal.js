const Modal = (props) => {
  const { handleCloseModal, modalData } = props;
  const { description, githubUrl, projectUrl, title } = modalData;

  return (
    <>
      <div className="modal-header">
        <div className="title">{title}</div>
        <button className="close-button" onClick={handleCloseModal}>
          &times;
        </button>
      </div>
      <div className="modal-body">{description}</div>
      <div className="links-wrapper">
        <a className="links" href={projectUrl} target="_blank" rel="noreferrer">
          View Project
        </a>
        <a className="links" href={githubUrl} target="_blank" rel="noreferrer">
          View Code
        </a>
      </div>
    </>
  );
};

export default Modal;
