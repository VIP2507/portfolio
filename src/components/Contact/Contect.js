import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Avtar from '@material-ui/core/Avatar'
function Contect() {
    return (
        <div className="contect__me">
        <div className="contect">
        <p>If You Have Any Project In Your Mind</p>
        <button>
        <a className="text-decoration-none " href="http://wa.me/919624124189" target="_blank" rel="noopener noreferrer">
        Contect Me</a>
        </button>  
        
        </div>
        <div className="footer">
        <Avtar src="dp1.png" alt="" style={{
            height:"100px",
            width:"100px"
        }}></Avtar>
        <p>Going to Internet</p>
        <p>i makes soon as possible.you reall like my Work,if you dont i 
        change this until you like i give you saticfasion result </p>
            <div className="Social__link">
                <div className="icon">
                    <a className="text-decoration-none text" 
                    style={{color:'#2f2f2f'}}
                    href="https://www.facebook.com/prince.chauhan.0601/"
                    target="_blank" rel="noopener noreferrer">
                        <FacebookIcon />
                    </a>
                </div>
                <div className="icon">
                    <a className="text-decoration-none text" 
                    style={{color:'#2f2f2f'}}
                    href="https://www.instagram.com/royal_rajput.25/"
                    target="_blank" rel="noopener noreferrer">
                        <InstagramIcon/>
                    </a>
                </div>
                <div className="icon">
                    <a className="text-decoration-none text" 
                    style={{color:'#2f2f2f'}}
                    href=" https://twitter.com/prince43852125"
                    target="_blank" rel="noopener noreferrer">
                      <TwitterIcon/>
                    </a>
                </div>
                <div className="icon">
                    <a className="text-decoration-none text" 
                    style={{color:'#2f2f2f'}}
                    href="https://www.linkedin.com/in/vipulsinh-chauhan-7406291a0"
                    target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon/>
                    </a>
                </div>
                <div className="icon">
                    <a className="text-decoration-none text" 
                    style={{color:'#2f2f2f'}}
                    href="https://github.com/VIP2507"
                    target="_blank" rel="noopener noreferrer">
                        <GitHubIcon/>
                    </a>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright by VIP PORTFOLIO</p>
            </div>
        </div>
        </div>

    )
}

export default Contect
