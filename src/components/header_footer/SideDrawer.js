import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    
    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth: true,
            offset: -90
        });
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="left"
            open={props.open}
            onClose={()=> props.onClose(false)}
            className="sidebar"
        >
            <List component="nav" className="navbar">
                <div className="item">
                <ListItem button onClick={()=> scrollToElement('home')}>
                   <h3 className="sidebar__text">Home</h3>
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('about')}>
                    <h3 className="sidebar__text">About Me</h3>
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('Skill')}>
                    <h3 className="sidebar__text">Skill</h3>
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('Project')}>
                    <h3 className="sidebar__text">Project</h3>
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('contact')}>
                    <h3 className="sidebar__text">Contect me</h3>
                </ListItem>
                </div>
            </List> 
        </Drawer>
    );
};

export default SideDrawer;