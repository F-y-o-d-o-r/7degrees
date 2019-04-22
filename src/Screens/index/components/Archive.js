import React, { Component } from 'react';

import data from '../../../json/data.json';

class Archive extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    this.setState(
      {
        data: data.archive
      },
      () => {
        // remove preloader
        //? todo preloader ?
      }
    );
  }
  render() {
    let { data } = this.state;
    // console.log(data.year);
    if (data) {
      data.map((data) =>
        data.object.projects.map((data) => {
          console.log(data);
        })
      );
    }

    return (
      <section className="archive-wrapper">
        <div className="container">
          <h2>Архив работ:</h2>
          <div className="archive-wrapper">
            {data ? (
              data.map((data) => (
                <div className="archive-items">
                  <div className="archive-year">{data.object.year}</div>
                  <div className="archive-projects-wrapper">
                    {data.object.projects.map((data) => (
                      <div className="archive-item">
                        <div className="left-part">
                          <div className="header">{data.header}</div>
                          <a
                            href="http://xn--80actcgauhukdsp.xn--p1ai/"
                            className="url url-mobile"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {data.url}
                          </a>
                          <div className="body">{data.body}</div>
                          <div className="tags">{data.tags}</div>
                        </div>
                        <a
                          href="http://xn--80actcgauhukdsp.xn--p1ai/"
                          className="url"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.url}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : null}
          </div>
        </div>
      </section>
    );
  }
}

export { Archive };
