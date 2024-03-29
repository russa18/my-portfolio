import React from 'react';
import "./Project.css";
import Projectcard from './Projectcard';
import articles from "../../ProjectData";


export default function Project() {

  return (
    <div className="projects">
      <div className='container '>
        <h1 className="p-head">PROJECTS</h1>
        <div className=" p-box">
          {
            articles.map((data, key) => {
              return <div className="p-cards " key={key}>
                <Projectcard key={key} title={data.title} description={data.description} gitLink={data.gitLink} imgLink={data.imgLink} demoLink={data.demoLink} className="col-md-3" />
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
