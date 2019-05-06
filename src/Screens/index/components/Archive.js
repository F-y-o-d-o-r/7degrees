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
    return (
      <section className="archives-wrapper">
        <div className="container">
          <h2>Архив работ:</h2>
          <div className="archive-wrapper">
            {data ? (
              data.map((data) => (
                <div className="archive-items" key={data.object.year}>
                  <div className="archive-year">{data.object.year}</div>
                  <div className="archive-projects-wrapper">
                    {data.object.projects.map((data) => (
                      <div className="archive-item" key={data.header}>
                        <div className="left-part">
                          <div className="header">{data.header}</div>
                          {data.url.toLowerCase() === 'в разработке' ? (
                            <span className="url url-mobile in-process">{data.url}</span>
                          ) : (
                            <a
                              href={data.ruUrl || data.url}
                              className="url url-mobile"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {data.url}
                            </a>
                          )}
                          <div className="body">{data.body}</div>
                          <div className="tags">{data.tags}</div>
                        </div>
                        {data.url.toLowerCase() === 'в разработке' ? (
                          <span className="url in-process">{data.url}</span>
                        ) : (
                          <a href={data.ruUrl || data.url} className="url" target="_blank" rel="noopener noreferrer">
                            {data.url}
                          </a>
                        )}
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
