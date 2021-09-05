import React from 'react';
import WorkMenuItem from './WorkMenuItem.js'

//I think this navbar links should come pre-loaded with props which will be used to generate the project page. 
//But where should the <project page> be inserted?


//need to add projectMenuItem component, identicla to ProjectSquare component **
const WorkMenu = ({itemsArray, switchToInnerView, setSelectedProject}) => {
    
    const array = itemsArray.map( item => {
            return (
                <WorkMenuItem 
                itemsArray={itemsArray} 
                switchToInnerView={switchToInnerView} 
                id={item.fields.id} 
                setSelectedProject={setSelectedProject}
                />
            )
        });
    
    return (
        <div>
            <ul className='flex-row work-menu'>
                {array}
            </ul>
        </div>
    )
};

export default WorkMenu;