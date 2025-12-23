import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "WasteFoodManagement App",
        description: "Mobile app for food waste management with donation tracking and community support.",
        tags: ["Flutter", "Dart", "Firebase"],
        image: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    },
    {
        title: "Employee Management System",
        description: "Full-stack employee management solution built with the MERN stack.",
        tags: ["React", "Express", "MongoDB", "Node.js"],
        image: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
    },
    {
        title: "Guess the Number Game",
        description: "Interactive React game providing instant feedback to users.",
        tags: ["React", "JavaScript", "CSS"],
        image: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
    },
    {
        title: "Mini E-Commerce Website",
        description: "Full-stack mini e-commerce platform.",
        tags: ["React", "Node.js", "Express"],
        image: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
    },
    {
        title: "School Website",
        description: "Responsive website with announcements, events, and student resources.",
        tags: ["HTML", "CSS", "JavaScript"],
        image: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured <span className="text-gradient">Work</span></h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="project-image" style={{ background: project.image }}></div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href="#"> <Github size={18} /> Code</a>
                                    <a href="#"> <ExternalLink size={18} /> Details</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .projects-section {
          padding: var(--spacing-xl) 0;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .project-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }
        
        .project-image {
          height: 200px;
          background-size: cover;
          background-position: center;
        }
        
        .project-content {
          padding: 1.5rem;
        }
        
        .project-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        
        .project-content p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }
        
        .project-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        
        .project-tags span {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          background: var(--bg-tertiary);
          border-radius: 4px;
          color: #d1d5db;
        }
        
        .project-links {
          display: flex;
          gap: 1rem;
        }
        
        .project-links a {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        
        .project-links a:hover {
          color: var(--primary);
        }
      `}</style>
        </section>
    );
};

export default Projects;
