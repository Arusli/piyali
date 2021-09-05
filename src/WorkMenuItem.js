import React from 'react';

const WorkMenuItem = ({itemsArray, switchToInnerView, id, setSelectedProject}) => {
    return (
        <li className='pointer work-menu-item' onClick={ () => {
            setSelectedProject(id-1);
        }}>{itemsArray[id-1].fields.name}</li>
    );
};

export default WorkMenuItem;