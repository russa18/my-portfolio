import React from 'react';
import "./Project.css";
import Projectcard from './Projectcard';
import articles from "../../ProjectData";


export default function Project() {

  return (
  
    <div className='container projects'>
      <h1 className="p-head">PROJECTS</h1>
      <div className="row p-cards">

        {/* <div className="col-md-4"> */}

      {
        articles.map((data,key)=>{
          return  <div className="col-md-3 m-4 " key={key}>
          <Projectcard key={key} title={data.title} description={data.description} gitLink={data.gitLink} imgLink={data.imgLink} className="col-md-3" />

          </div>

        })
      }


       </div>
     </div>
  )
}
