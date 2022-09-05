import React from "react";
import { skills } from "../data/projectsData";

export default function Skills() {
    return (
        <div>
            <h1>Skills</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
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
            </div>
        </div>

    )
}