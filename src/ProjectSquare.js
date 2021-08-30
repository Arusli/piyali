import React from 'react';

const ProjectSquare = ({projectsArray, onViewChange, id}) => {
    return (
        <div className='aspect-square pointer'>
            <div className='canvas center' onClick={onViewChange}>
                {projectsArray[(id - 1)].title}
            </div>
        </div>
    );
};

export default ProjectSquare;