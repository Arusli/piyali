import React from 'react';

//setSelectedProject

const ProjectSquare = ({projectsArray, switchToInnerView, id, setSelectedProject}) => {
    return (
        <div className='aspect-square pointer'>
            <div className='canvas center' 
            onClick={()=>{
                switchToInnerView();
                setSelectedProject(id-1);
            }}
            >
                {projectsArray[(id - 1)].title}
            </div>
        </div>
    );
};

export default ProjectSquare;