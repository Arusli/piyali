import React from 'react';

const WorkMenuItem = ({projectsArray, switchToInnerView, id, setSelectedProject}) => {
    return (
        <li onClick={ () => {
            setSelectedProject(id-1);
        }}>{projectsArray[id-1].title}</li>
    );
};

export default WorkMenuItem;