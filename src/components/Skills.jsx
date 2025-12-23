import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        My <span className="text-gradient">Skills</span>
                    </h2>

                    <div className="skills-container">

                        {/* Frontend */}
                        <div className="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                            <span>React.js</span>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                            <span>HTML5</span>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                            <span>CSS3</span>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                            <span>JavaScript</span>
                        </div>

                        {/* Mobile */}
                        <div className="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" />
                            <span>Flutter</span>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" />
                            <span>Dart</span>
                        </div>

                        {/* UI/UX */}
                        <div className="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                            <span>UI / UX</span>
                        </div>

                        {/* Backend & DB */}
                        <div className="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                            <span>Node.js (Basic)</span>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                            <span>PHP (Basic)</span>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                            <span>MySQL</span>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                            <span>MongoDB (Basic)</span>
                        </div>

                        {/* Programming */}
                        <div className="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                            <span>Java</span>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" />
                            <span>C</span>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                            <span>Python</span>
                        </div>

                        {/* Tools */}
                        <div className="skill-card">
                            <img src="https://img.icons8.com/color/48/canva.png
" alt="Canva" />
                            <span>Canva</span>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
                            <span>VS Code</span>
                        </div>
                        <div className="skill-card">
                            <img src="https://img.icons8.com/color/48/power-bi.png" alt="Power BI" />
                            <span>Power BI</span>
                        </div>
                        <div className="skill-card">
                            <img src="https://img.icons8.com/color/48/adobe-photoshop.png
" alt="Photoshop" />
                            <span>Photoshop</span>
                        </div>

                    </div>
                </motion.div>
            </div>

            <style>{`
              .skills-section {
                padding: var(--spacing-xl) 0;
                background: var(--bg-primary);
              }

              .skills-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 1.6rem;
                margin-top: 2.5rem;
              }

              .skill-card {
                width: 90px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.45rem;
                padding: 0.4rem;
                background: transparent;
                border-radius: 0;
                transition: transform 0.3s ease;
              }

              .skill-card img {
                width: 38px;
                height: 38px;
                transition: transform 0.3s ease, filter 0.3s ease;
              }

              .skill-card span {
                font-size: 0.78rem;
                color: var(--text-secondary);
                text-align: center;
                transition: color 0.3s ease;
              }

              /* ICON-ONLY HOVER EFFECT */
              .skill-card:hover {
                transform: translateY(-6px);
              }

              .skill-card:hover img {
                transform: scale(1.15);
                filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.85));
              }

              .skill-card:hover span {
                color: var(--primary);
              }
            `}</style>
        </section>
    );
};

export default Skills;
