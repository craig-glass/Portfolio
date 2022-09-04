import { projects } from "../data/projectsData";

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <br></br>
            <div className="grid-container">
                {projects.map((project) => (
                    <>
                        <div className="grid-item">
                            <h2>{project.title}</h2>
                            <h4>{project.subtitle}</h4>
                            <p>{project.description}</p>
                            <a href={project.link}>Click here to see project</a>
                        </div>
                    </>
                ))}
            </div>

        </div>
    )
}