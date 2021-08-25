import React from 'react';

//2 states, Index state and Project State
//Need way to conditionally render the selected project. Should be self generating I think. 
//Generate from an array download from contently?
//might need to use .map method to create all the project listings with correlating onClick functions/array/objects.


const Work = () => {

    return (
        <div>
            <div class='grid-container'>
                <div class='grid-item'>Project 1</div>
                <div class='grid-item'>Project 2</div>
                <div class='grid-item'>Project 3</div>
            </div>
        </div>
    )

}

export default Work;