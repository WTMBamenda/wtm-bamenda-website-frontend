import React, { useState } from "react";
import ProjectImg from "../assets/project/project.png";
import "../Project.css";

const Project = () => {
  const projects = [
    {
      name: "WTM BADEMA WEBSITE",
      tags: [
        "Design",
        "Android Development",
        "UI/UX",
        "DevOps",
        "Machine Learning",
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ad eum accusantium, deserunt repellendus consectetur omnis error nam, exercitationem sapiente a unde quibusdam molestias vitae expedita. Odit cupiditate tempora quidem!",
      img: ProjectImg,
    },
    {
      name: "WTM BADEMA WEBSITE",
      tags: [
        "Design",
        "Android Development",
        "Backend Development",
        "Frontend Development",
        "UI/UX",
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ad eum accusantium, deserunt repellendus consectetur omnis error nam, exercitationem sapiente a unde quibusdam molestias vitae expedita. Odit cupiditate tempora quidem!",
      img: ProjectImg,
    },
    {
      name: "WTM BADEMA WEBSITE",
      tags: [
        "Android Development",
        "Cybersecurity",
        "Cloud Computing",
        "Game Development",
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ad eum accusantium, deserunt repellendus consectetur omnis error nam, exercitationem sapiente a unde quibusdam molestias vitae expedita. Odit cupiditate tempora quidem!",
      img: ProjectImg,
    },
  ];

  const alltags = [
    { tags: "Design" },
    { tags: "Android Development" },
    { tags: "Backend Development" },
    { tags: "Frontend Development" },
    { tags: "UI/UX" },
    { tags: "DevOps" },
    { tags: "Machine Learning" },
    { tags: "Data Science" },
    { tags: "Cybersecurity" },
    { tags: "Cloud Computing" },
    { tags: "Game Development" },
  ];

  const [showAll, setShowAll] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");

  const displayProjects = () => {
    return projects
      .filter((project) => !selectedTag || project.tags.includes(selectedTag))
      .map((project, index) => (
        <div
          key={index}
          className={`project ${index % 2 === 0 ? "even" : "odd"}`}
        >
          {index % 2 === 0 ? (
            <div className="project-details">
              <div className="project-content">
                <div className="project-title">{project.name}</div>
                <div className="description">{project.description}</div>
                <div className="tag-container">
                  {project.tags?.map((tag, index) => (
                    <div className="project-tags" key={index}>
                      {tag}
                    </div>
                  ))}
                </div>
                <button className="view-projects-button"> View projects</button>
              </div>
              <div className="project-image">
                <img src={project.img} alt="" />
              </div>
            </div>
          ) : (
            <div className="project-details">
              <div className="project-image">
                <img src={project.img} alt="" />
              </div>
              <div className="project-content">
                <div className="project-title">{project.name}</div>
                <div className="description">{project.description}</div>
                <div className="tag-container">
                  {project.tags?.map((tag, index) => (
                    <div className="project-tags" key={index}>
                      {tag}
                    </div>
                  ))}
                </div>
                <button className="view-projects-button"> View projects</button>
              </div>
            </div>
          )}
        </div>
      ));
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visibleTags = showAll
  ? alltags.flatMap((tag) => (
      <button
        key={tag.tags}
        className={`project-tags ${selectedTag === tag.tags ? 'selected-tag' : ''}`}
        onClick={() => setSelectedTag(tag.tags)}
      >
        {tag.tags}
      </button>
    ))
  : alltags.slice(0, 3).flatMap((tag) => (
      <button
        key={tag.tags}
        className={`project-tags ${selectedTag === tag.tags ? 'selected-tag' : ''}`}
        onClick={() => setSelectedTag(tag.tags)}
      >
        {tag.tags}
      </button>
    ));


  return (
    <div className="project-page">
      <div className="header">Our Projects</div>

      <div className="tagging">
        <button
          className="project-tags"
          style={{
            backgroundColor: "#005AC1",
            color: "white",
          }}
          onClick={() => setSelectedTag("")}
        >
          All
        </button>

        {visibleTags}

        <button className="project-tags" onClick={toggleShowAll}>
          {showAll ? "less" : "more.."}
        </button>
      </div>

      <div className="projects">{displayProjects()}</div>
    </div>
  );
};

export default Project;
