import React from "react";
import { skills } from "../data/projectsData";

export default function Skills() {
    return (
        <div>
            <h1>Skills</h1>

            <ul className="gridbar">
                {skills.map((skill) => (
                    <>
                        <li className="gridbaritem"
                            style={{ gridColumn: "span " + skill.level }}>
                            <span className="colorspan">{skill.title}</span><span className="colorspan">{skill.level}</span>
                        </li>
                    </>
                ))}
            </ul>
            {/* <div className="flexybox">
                <h2>DigitalOcean</h2>
                <h2>AWS</h2>
                <h2>Heroku</h2>
            </div>
            <div className="flexybox">
                <h2>CI/CD Pipelines</h2>
                <h2>Github Actions</h2>
                <h2>Docker</h2>
            </div>
            <div className="flexybox">
                <h2>Linux Administration</h2>
                <h2>Bash Scripting</h2>
                <h2>Git and Git Workflows</h2>
            </div>
            <div className="flexybox">
                <h2>Nginx</h2>
                <h2>Apache</h2>
            </div>
            <div className="flexybox">
                <h2>Django</h2>
                <h2>Flask</h2>
                <h2>Express</h2>
                <h2>React</h2>
            </div>
            <div className="flexybox">
                <h2>SQL</h2>
                <h2>NoSQL</h2>
            </div>
            <div className="flexybox">
                <h2>Project Management</h2>
                <h2>Software Development LifeCycle</h2>
                <h2>Agile Development</h2>
                <h2>Networking</h2>
            </div> */}
        </div>

    )
}