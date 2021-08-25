import React from 'react';

//2 states, Index state and Project State
//Need way to conditionally render the selected project. Should be self generating I think. 
//Generate from an array download from contently?
//might need to use .map method to create all the project listings with correlating onClick functions/array/objects.


const Work = () => {

    return (
        <div>
            <div class='grid-container-work'>
                <div class='project-square pointer'>Project 1</div>
                <div class='project-square pointer'>Project 2</div>
                <div class='project-square pointer'>Project 3</div>
                <div class='project-square pointer'>Project 4</div>
                <div class='project-square pointer'>Project 5</div>
                <div class='project-square pointer'>Project 6</div>
            </div>
        </div>
    )

}

export default Work;