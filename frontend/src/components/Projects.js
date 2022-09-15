import { projects } from "../data/projectsData";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <br></br>
      <div className="grid-container">
        {projects.map((project) => (
          <>
            <motion.div
              className="grid-item"
              whileHover={{
                scale: 1.2,
                transition: { type: "spring", bounce: 0.8 },
              }}
            >
              <h2>{project.title}</h2>
              <img
                alt="hero"
                src={project.image}
                width="100%"
                height="25%"
              ></img>
              <h4>{project.subtitle}</h4>
              <p>{project.description}</p>
              <a href={project.link}>Click here to see project</a>
            </motion.div>
          </>
        ))}
      </div>
    </div>
  );
}
