import React from 'react'
import "../utils/styles/Ninth.css";
import image1 from "../utils/images/alex-large.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export const Nine = () => {
  return (
    <div className='nine-main-div'>
    <div className="ninth-div">
        <div className="row">
          <div className="col-12">
            <img className="image3" src={image1} />
            </div>
            <div className="col-12"/>
              <div className="container">
                <div className="container-ninth">
            <div className="description-ninth-div">
                <h2>PHIL SHACKLETON</h2>
                <h3 style={{color:"#D62424"}}>FOUNDER & DIGITAL DIRECTOR</h3>
                <p>
                  Phil co-founded Mixd with Mike Danford in 2004 and now guides
                  the company’s technical direction. As an expert in usability
                  and user centred design, he has led large-scale UX projects,
                  focussing on speed of innovation, usability and service design
                  in the NHS and other public sectors. You could describe Phil
                  as an obsessive road cyclist, former outdoor pursuits
                  instructor and owner of a dog called Surprise.
                </p>
              </div>
          </div>
              </div>
            </div>
            </div>
            </div>
  )
}
