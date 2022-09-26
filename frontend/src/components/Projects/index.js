import "./index.css";
import { projects } from "../../data/projectsData";
import { motion } from "framer-motion";

export default function Projects() {
  const isSmall = window.screen.width < 500;
  console.log("isSmall = ", isSmall, window.screen.width);
  const variants = isSmall
    ? {
        whileInView: {
          scale: 1,
          borderRadius: ["50%", "10%"],
          transition: { type: "spring", bounce: 0.8, delay: 1 },
        },
        whileHover: {
          scale: 1,
        },
      }
    : {
        whileInView: {
          scale: 1,
          boxShadow: "0px 0px 70px #328cc1",
        },
        whileHover: {
          scale: 1.2,
          borderRadius: ["50%", "10%"],
          transition: { type: "spring", bounce: 0.8 },
          boxShadow: "0px 0px 70px #d9b310",
        },
      };

  return (
    <div className="projectsContainer">
      <h1>Projects</h1>
      <br></br>
      <div className="grid-container">
        {projects.map((project) => (
          <>
            <motion.div>
              <h2 style={{ height: "50px" }}>{project.title}</h2>
              <div style={{ padding: "20%" }}>
                <a href={project.link}>
                  <motion.img
                    variants={variants}
                    whileHover="whileHover"
                    whileInView="whileInView"
                    alt="hero"
                    src={project.image}
                    width="100%"
                    height="100%"
                  ></motion.img>
                </a>
              </div>
            </motion.div>
          </>
        ))}
      </div>
    </div>
  );
}
