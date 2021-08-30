import React from 'react';

//setSelectedProject

const ProjectSquare = ({projectsArray, onViewChange, id, setSelectedProject}) => {
    return (
        <div className='aspect-square pointer'>
            <div className='canvas center' 
            onClick={()=>{
                onViewChange();
                setSelectedProject(id-1);
            }}
            >
                {projectsArray[(id - 1)].title}
            </div>
        </div>
    );
};

export default ProjectSquare;