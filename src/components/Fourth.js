import React from 'react'
import image2 from "../utils/images/rory.jpg";
import '../utils/styles/Fourth.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Fourth = () => {
  return (
    <div className='fourth-main-div'>
    <div className="fourth-main">
        <div className="row">
          <div className="col-12">
            <img className="image4" src={image2} />
            </div>
            <div className="col-12"/>
              <div className="container">
                <div className="cotainer-fourth">
            <div className="description-Fourth-div">
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
                <p >
                      <FaTwitter style={{ color: "#1EA1F2" }} size={40} /> <a>@LIMEYBLOKE</a>
                    </p>
                    <p>
                      <FaLinkedin  style={{ color: "#017BB5" }} size={40}/> <a>@LIMEYBLOKE</a>
                    </p>
              </div>
          </div>
              </div>
            </div>
            </div>
  </div>
  )
}
