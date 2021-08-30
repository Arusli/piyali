import React from 'react';

const Project = ({projectsArray, selectedProject}) => {
    return (
            <div className='grid-container-project'>
                <div className='project-images'>
                    <div className='flex-column'>
                        <div style={{backgroundImage: `url(${projectsArray[selectedProject].images[0]})`}}className='aspect-square project-pic'></div>
                        <div className='aspect-square project-pic'></div>
                    </div>
                </div>
                <div className='project-description'>
                        {projectsArray[selectedProject].text}
                </div>
            </div>
    );
};

export default Project;