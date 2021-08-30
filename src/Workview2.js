import React from 'react';
import Navbar2 from './Navbar2.js';
import Project from './Project.js';

const Workview2 = ({projectsArray}) => {

    return (
        <div>
            <Navbar2 projectsArray={projectsArray} />
            <Project />
        </div>
    )
}

export default Workview2;