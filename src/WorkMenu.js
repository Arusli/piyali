import React from 'react';
import WorkMenuItem from './WorkMenuItem.js'

//I think this navbar links should come pre-loaded with props which will be used to generate the project page. 
//But where should the <project page> be inserted?


//need to add projectMenuItem component, identicla to ProjectSquare component **
const WorkMenu = ({projectsArray, switchToInnerView, setSelectedProject}) => {
    
    const array = projectsArray.map( item => {
            return (
                <WorkMenuItem 
                projectsArray={projectsArray} 
                switchToInnerView={switchToInnerView} 
                id={item.id} 
                setSelectedProject={setSelectedProject}
                />
            )
        });
    
    return (
        <div>
            <ul className='flex-row'>
                {array}
            </ul>
        </div>
    )
};

export default WorkMenu;