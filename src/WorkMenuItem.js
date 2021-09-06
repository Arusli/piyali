import React from 'react';

const WorkMenuItem = ({
    itemsArray, 
    switchToInnerView, 
    id, 
    setSelectedProjectIndex,
    setSelectedProjectName,
    selectedProjectName
    }) => {


        if (itemsArray[id-1].fields.name === selectedProjectName) {
            return (
                <li className='pointer work-menu-item highlight' onClick={ () => {
                    setSelectedProjectIndex(id-1);
                    setSelectedProjectName(itemsArray[id-1].fields.name);
                }}>{itemsArray[id-1].fields.name}</li>
            );
        } else {
            return (
                <li className='pointer work-menu-item' onClick={ () => {
                    setSelectedProjectIndex(id-1);
                    setSelectedProjectName(itemsArray[id-1].fields.name);
                }}>{itemsArray[id-1].fields.name}</li>
            );
        }
};

export default WorkMenuItem;