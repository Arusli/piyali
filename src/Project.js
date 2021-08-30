import React from 'react';

const Project = ({projectsArray}) => {
    return (
            <div className='grid-container-project'>
                <div className='project-images'>
                    <div className='flex-column'>
                        <div className='aspect-square project-pic'></div>
                        <div className='aspect-square project-pic'></div>
                    </div>
                </div>
                <div className='project-description'>
                        {projectsArray[0].text}
                </div>
            </div>
    );
};

export default Project;