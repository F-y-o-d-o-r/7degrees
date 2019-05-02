import React, { Component } from 'react';
import ScrollMagic from 'scrollmagic';
// import * as ScrollMagic from 'scrollmagic';
import data from '../../../json/data.json';
// var ScrollMagic = require('scrollmagic');
// require('../../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');

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

    // START Year scroll
    setTimeout(() => {
      let controllerContacts = new ScrollMagic.Controller();
      new ScrollMagic.Scene({
        triggerElement: '.archive-items',
        triggerHook: 0,
        offset: -150,
        // duration: '100%',
        reverse: true
      })
        .setClassToggle('.archive-year', 'fixed-year')
        .addIndicators({ name: 'smoth-show-from-div' })
        .addTo(controllerContacts);
    }, 1000);
    // END Year scroll
  }
  render() {
    let { data } = this.state;
    return (
      <section className="archives-wrapper">
        <div className="container">
          <h2>Архив работ:</h2>
          <div className="archive-wrapper">
            {data ? (
              data.reverse().map((data) => (
                <div className="archive-items" key={data.object.year}>
                  <div className="archive-year">{data.object.year}</div>
                  <div className="archive-projects-wrapper">
                    {data.object.projects.map((data) => (
                      <div className="archive-item" key={data.header}>
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
                        <a href={data.url} className="url" target="_blank" rel="noopener noreferrer">
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
