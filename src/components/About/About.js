//import { Button } from '@material-ui/core'
import React from 'react'
import Zoom from 'react-reveal/Zoom'
function About() {
    return (
        <>
       
        <div class="about" style={{
            height:`${window.innerHeight}px`,
        }}>
        <Zoom right>
            <div className="about__text">
                <p>Hello</p>
                <p>I'M VIPUL</p>
                <p>I am Frontend devloper & Designer</p>
                <button  style={{
                    border:`2px solid #373636`,
                    Color:`#373636`
                }}>
                <a className="text-decoration-none text-black" href="http://wa.me/919624124189" target="_blank" rel="noopener noreferrer">
                Hire Me</a></button>
                <button  style={{
                    backgroundColor:`#0b0b0b`,
                    color:`#ffffff`,
                    border:`none`
                }}>
                <a className="text-decoration-none text-white" href="https://drive.google.com/file/d/1GAmQMLepimj3qy4Kwiw5omD-UqOikIOY/view" target="_blank" rel="noopener noreferrer">
                Download CV
                </a>
                </button>
            </div>
            </Zoom>
            <Zoom left>
            <div className="about__profile">
                <img src="dp1.png" alt="profile" className="profile"/>
            </div>
            </Zoom>
        </div>
        
        <div className="about__info">
            <div className="info__image">
                <img src="dp2.png" alt="profile"></img>
            </div>   
            <div className="info__text">
                <p>About Me</p>
                <p>Devolper & Designer</p>
                <p>Hello, My name is <span> Vipul Chauhan</span>.I m a reactJs FrontendDeveloper and also a 
                Designer.if you have assignee project or if you want make a website for 
                your business contect me.I make as soon as possible.you really like my work</p>
               <div className="info__button">
                    <div className="button">
                        <button>
                        <a className="text-decoration-none text-white" href="http://wa.me/919624124189" target="_blank" rel="noopener noreferrer">
                        Hire Me
                        </a></button>

                     </div>
                    <div className="button">
                      <button>
                      <a className="text-decoration-none text-white" href="https://drive.google.com/file/d/1GAmQMLepimj3qy4Kwiw5omD-UqOikIOY/view" target="_blank" rel="noopener noreferrer">
                      Download CV
                      </a>
                      </button>
                    </div>
               </div>
            </div> 
        </div>
        </>
    )
}

export default About
