import React from 'react';

const ProjectImage = ({projectsArray, selectedProject, index}) => {
    return (
        <div style={{backgroundImage: `url(${projectsArray[selectedProject].images[index]})`}} className='aspect-square project-pic'></div>
    );
};

export default ProjectImage;