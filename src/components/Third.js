import React from 'react'
import "../utils/styles/Third.css";
import image1 from "../utils/images/alex-large.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Third = () => {
  return (
        <div className='third-main-div'>
     <div className="Third-div">
        <div className="row">
          <div className="col-12">
            <img className="image3" src={image1} />
            </div>
            <div className="col-12"/>
              <div className="container">
                <div className="container_third">
            <div className="description-third">
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
                      <FaTwitter style={{ color: "#1EA1F2" }} size={40}/> <a>@LIMEYBLOKE</a>
                    </p>
                    <p >
                      <FaGithub  size={40}/> <a>@LIMEYBLOKE</a>
                    </p>
              </div>
          </div>
              </div>
            </div>
            </div>
      </div>
  )
}
