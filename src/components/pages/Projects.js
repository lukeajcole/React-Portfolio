import React, { useState } from "react";
import ProjectDetailsModal from "../ProjectDetailsModal";

const Projects = (props) => {
    
    const [detailsModel, setDetailsModal] = useState({
      deps: {},
      detailsModalShow: false,
    });

    let detailsModalShow = (data) => {
      setDetailsModal({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => setDetailsModal({ detailsModalShow: false });
    if (props.resumeProjects && props.resumeBasicInfo) {
      var sectionName = props.resumeBasicInfo.section_name.projects;
      var projects = props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>

          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={detailsModel.detailsModalShow}
            onHide={detailsModalClose}
            data={detailsModel.deps}
          />
        </div>
      </section>
    );
  }

export default Projects;
