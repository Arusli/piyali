import React from 'react';
import ProjectImage from './ProjectImage.js';

const Project = ({itemsArray, selectedProjectIndex}) => {
    let index = -1;
    const array = itemsArray[selectedProjectIndex].fields.images.map( item => {
        index += 1;
        return (
            <ProjectImage itemsArray={itemsArray} selectedProjectIndex={selectedProjectIndex} index={index} />
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
                        {itemsArray[selectedProjectIndex].fields.description}
                </div>
            </div>
    );
};

export default Project;