import React from 'react';

//2 states, Index state and Project State
//Need way to conditionally render the selected project. Should be self generating I think. 
//Generate from an array download from contently?
//might need to use .map method to create all the project listings with correlating onClick functions/array/objects.
//Basically, all text and images (all content) should be organized as an array of objects before entering html.

const Work = () => {

    return (
        <div>
            <div class='grid-container-work'>
                <div class='aspect-square pointer'>
                    <div class='canvas center'>
                        Project 1
                    </div>
                </div>
                <div class='aspect-square pointer'>
                    <div class='canvas center'>
                        Project 2
                    </div>
                </div>
                <div class='aspect-square pointer'>
                    <div class='canvas center'>
                        Project 3
                    </div>
                </div>
                <div class='aspect-square pointer'>
                    <div class='canvas center'>
                        Project 4
                    </div>
                </div>
                <div class='aspect-square pointer'>
                    <div class='canvas center'>
                        Project 5
                    </div>
                </div>
                <div class='aspect-square pointer'>
                    <div class='canvas center'>
                        Project 6
                    </div>
                </div>
                
            </div>
        </div>
    )

}

export default Work;