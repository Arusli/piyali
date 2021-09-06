import React from 'react';

const ProjectImage = ({itemsArray, selectedProjectIndex, index}) => {
    return (
        <div style={{backgroundImage: `url(${itemsArray[selectedProjectIndex].fields.images[index].fields.file.url})`}} 
            className='project-pic'>
        </div>
    );
};

export default ProjectImage;