import React from 'react'
import Button from '@material-ui/core/Button'
import {projects} from './Project-data'
import Image from "react-bootstrap/Image";
import Zoom from 'react-reveal/Zoom'

function Project() {

    return (
       <div className="pData">
       <h1 className="text-center font-details-b pb-4" style={{color:"#262525",fontFamily:'cursive'}}>Projects</h1>

            <div className="project d-flex">
            <Zoom right>
            {projects.p1Data.map((project, index) => (
                <span  key={index}>   
                         <div className="project__box" style={{justifyContent:'space-between'}}>       
                         <Image src={project.image} className="Image"></Image> 
                         <h2 style={{marginTop:'-300px'}}>{project.name}</h2> 
                           <div className="detail">
                           <p > {project.detail1}</p>
                           <p > {project.detail2}</p>
                           <p> {project.detail3}</p>
                           <p> {project.detail4}</p>
                           </div>
                                <a className="text-dark text-decoration-none" href={project.link} target="_blank" rel="noopener noreferrer">
                                    <Button style={{backgroundColor:'white',width:'100%'}}>View Project</Button>
                                </a>
                            </div>     
                    </span>
                ))}
                </Zoom>
                </div>
                <div className="project d-flex">
                <Zoom left>
                {projects.p2Data.map((project, index) => (
                    <span  key={index}>   
                         <div className="project__box" style={{justifyContent:'space-between'}}>       
                         <Image src={project.image} className="Image"></Image> 
                         <h2 style={{marginTop:'-300px'}}>{project.name}</h2> 
                            <div className="detail">
                                <p > {project.detail1}</p>
                                <p > {project.detail2}</p>
                                <p> {project.detail3}</p>
                                <p> {project.detail4}</p>
                            </div>
                                <a className="text-dark text-decoration-none" href={project.link} target="_blank" rel="noopener noreferrer">
                                    <Button style={{backgroundColor:'white',width:'100%'}}>View Project</Button>
                                </a>
                            </div>     
                    </span>
                  ))}
                  </Zoom>
                  </div>
                  <div className="project d-flex">
                  <Zoom right>
                  {projects.p3Data.map((project, index) => (
                    <span  key={index}>   
                    <div className="project__box" style={{justifyContent:'space-between'}}>       
                    <Image src={project.image} className="Image"></Image> 
                    <h2 style={{marginTop:'-300px'}}>{project.name}</h2> 
                    <div className="detail">
                        <p > {project.detail1}</p>
                        <p > {project.detail2}</p>
                        <p> {project.detail3}</p>
                        <p> {project.detail4}</p>
                    </div>
                           <a className="text-dark text-decoration-none" href={project.link} target="_blank" rel="noopener noreferrer">
                               <Button style={{backgroundColor:'white',width:'100%',borderRadius:'5px'}}>View Project</Button>
                           </a>
                       </div>     
               </span>
                    ))}
                    </Zoom>
                    </div>
       </div>
    )
}

export default Project

