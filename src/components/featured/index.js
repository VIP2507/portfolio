import React from 'react';
import Carrousel from './Carrousel';
import Typical from 'react-typical'
import Bounce from 'react-reveal/Bounce';


const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carrousel/>

            <div className="artist_name">
                <div className="wrapper">
                <Bounce left>
                    <h1><span>Hi, I'm </span><br></br>Vipul Chauhan</h1>
                    </Bounce>
                    <Bounce right>
                    <p>I'm a {' '}</p>
                    <Typical
                        loop={Infinity}
                        wrapper='b'
                        steps={
                            [
                                `web Developer`,
                                3000,
                                `web Designer`,
                                4000,
                                'react.js Developer',
                                4000,
                                `frontend-Developer`,
                                2000,
                            ]
                        }>
                    </Typical>
                </Bounce>

                </div>
            </div>

        </div>
    );
};

export default Featured;