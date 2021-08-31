import React from 'react';
import ProjectImage from './ProjectImage.js';

const Project = ({projectsArray, selectedProject}) => {
    let index = -1;
    const array = projectsArray[selectedProject].images.map( item => {
        index += 1;
        return (
            <ProjectImage projectsArray={projectsArray} selectedProject={selectedProject} index={index} />
        )
    });

    return (
            <div className='grid-container-project'>
                <div className='project-images'>
                    <div className='flex-column'>
                        {array}
                    </div>
                </div>
                <div className='project-description'>
                        {projectsArray[selectedProject].text}
                </div>
            </div>
    );
};

export default Project;