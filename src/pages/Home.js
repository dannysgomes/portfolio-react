import { useState, useEffect } from "react";
import BioCard from "../components/BioCard";
import data from "../data/data";
import ProjectCard from "../components/ProjectCard";
import Modal from "../components/Modal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleModal = (index) => {
    setModalData(data[index]);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setModalData({});
  };

  useEffect(() => {
    //  future code
  }, [modalData]);

  return (
    <>
      <BioCard />
      <div className="projects">
        {data.map((project, index) => {
          return (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              handleModal={handleModal}
            />
          );
        })}
      </div>
      {isOpen ? (
        <div className="overlay">
          <div className="modal">
            <Modal handleCloseModal={handleCloseModal} modalData={modalData} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Home;
