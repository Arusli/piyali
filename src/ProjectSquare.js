import React from 'react';

//setSelectedProject

const ProjectSquare = ({itemsArray, switchToInnerView, id, setSelectedProject}) => {
    return (
        <div className='aspect-square pointer project-square'>
            <div className='canvas center' 
            onClick={()=>{
                switchToInnerView();
                setSelectedProject(id-1);
            }}
            >
                {itemsArray[(id - 1)].fields.name}
            </div>
        </div>
    );
};

export default ProjectSquare;