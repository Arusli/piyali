import React from 'react';

const ProjectImage = ({itemsArray, selectedProject, index}) => {
    return (
        <div style={{backgroundImage: `url(${itemsArray[selectedProject].fields.images[index].fields.file.url})`}} className='aspect-square project-pic'></div>
    );
};

export default ProjectImage;