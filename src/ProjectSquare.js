import React from 'react';

//setSelectedProjectIndex

const ProjectSquare = (
    {itemsArray, 
    switchToInnerView, 
    id, 
    selectedProjectIndex,
    setSelectedProjectIndex,
    setSelectedProjectName
    }) => {
    return (
        <div className='aspect-square pointer project-square'>
            <div className='canvas center' 
            onClick={()=>{
                switchToInnerView();
                setSelectedProjectIndex(id-1);
                setSelectedProjectName(itemsArray[id-1].fields.name);
                // itemsArray[selectedProjectIndex] doesn't work because not updated yet? How to fix? Ask lu or david
            }}
            >
                {itemsArray[(id - 1)].fields.name}
            </div>
        </div>
    );
};

export default ProjectSquare;