import React, {useState} from 'react';
import Workview2 from './Workview2.js';

//2 states, Index state and Project State
//Need way to conditionally render the selected project. Should be self generating I think. 
//Generate from an array download from contently?
//might need to use .map method to create all the project listings with correlating onClick functions/array/objects.
//Basically, all text and images (all content) should be organized as an array of objects before entering html.

const Work = () => {

    const [overview, setOverview] = useState(true);
    const [innerview, setInnerview] = useState(false);

    const onViewChange = () => {
        setOverview(false);
        setInnerview(true);
    }

    if (overview) {
        return (
            <div>
                <div className='grid-container-work'>
                    <div className='aspect-square pointer'>
                        <div className='canvas center' onClick={onViewChange}>
                            Project 1
                        </div>
                    </div>
                    <div className='aspect-square pointer'>
                        <div className='canvas center'>
                            Project 2
                        </div>
                    </div>
                    <div className='aspect-square pointer'>
                        <div className='canvas center'>
                            Project 3
                        </div>
                    </div>
                    <div className='aspect-square pointer'>
                        <div className='canvas center'>
                            Project 4
                        </div>
                    </div>
                    <div className='aspect-square pointer'>
                        <div className='canvas center'>
                            Project 5
                        </div>
                    </div>
                    <div className='aspect-square pointer'>
                        <div className='canvas center'>
                            Project 6
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    } else {
        return <Workview2 />;
    }
    

}

export default Work;