import React, { Component } from 'react';

import Project from './_Project';
import data from '../../../json/data.json';

class Projects extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    this.setState(
      {
        data: data.projects
      },
      () => {
        // remove preloader
        //? todo preloader ?
      }
    );
  }
  render() {
    let projects = this.state.data;
    return (
      <section className="projects">
        <div className="container">
          <h2>Последние релизы:</h2>
          <div className="projects-wrapper">
            {projects ? projects.map((project) => <Project key={project.id} project={project} />) : null}
          </div>
        </div>
      </section>
    );
  }
}

export { Projects };
