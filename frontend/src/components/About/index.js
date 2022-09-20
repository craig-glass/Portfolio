import React from "react";
import "./index.css";
import Alien from "../../images/profilePic.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <div className="aboutContainer">
        <div className="aboutText">
          <h1>
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              H
            </motion.span>
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 2.2, delay: 0.2 }}
            >
              i
            </motion.span>
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 2.4, delay: 0.4 }}
            >
              ,
            </motion.span>
            <span> </span>
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 2.6, delay: 0.6 }}
            >
              I
            </motion.span>
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 2.8, delay: 0.8 }}
            >
              '
            </motion.span>
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 3, delay: 1 }}
            >
              m
            </motion.span>
            <span> </span>
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 3.2, delay: 1.2 }}
            >
              C
            </motion.span>
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 3.4, delay: 1.4 }}
            >
              r
            </motion.span>
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 3.6, delay: 1.6 }}
            >
              a
            </motion.span>
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 3.8, delay: 1.8 }}
            >
              i
            </motion.span>
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 4, delay: 2 }}
            >
              g
            </motion.span>
            <br></br>
          </h1>
          <p>
            I am a competent developer with experience implementing both the
            backend and frontend of applications. I understand all aspects of
            the software development lifecycle and I am comfortable working with
            both agile and waterfall methodologies. I am seeking to find a
            position in a company in which I can expand my knowledge and grow my
            skills.
          </p>
        </div>
        <div className="profilepic">
          <br></br>
          <img alt="hero" src={Alien} width={200} height={200}></img>
        </div>
      </div>
    </section>
  );
}
