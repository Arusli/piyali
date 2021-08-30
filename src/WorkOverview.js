import React from 'react';
import ProjectSquare from './ProjectSquare.js';

//2 states, Index state and Project State
//Need way to conditionally render the selected project. Should be self generating I think. 
//Generate from an array download from contently?
//might need to use .map method to create all the project listings with correlating onClick functions/array/objects.
//Basically, all text and images (all content) should be organized as an array of objects before entering html.

const WorkOverview = (
    {projectsArray, 
    overview, 
    setOverview, 
    innerview, 
    setInnerview, 
    switchToInnerView,
    setSelectedProject
    }) => {

        console.log(projectsArray);

        // How do I do this?
        //https://stackoverflow.com/questions/44561037/loop-in-return-statement-of-a-component-in-react-js
        // problem: cannot map an object, only an array.
        //maybe use object.keys somehow or something to separate out this object. 
        // const array = projectsArray.map( item => {
        //     return (
        //         <div className='aspect-square pointer'>
        //             <div className='canvas center' onClick={onViewChange}>
        //                 {item.title}
        //             </div>
        //         </div>
        //     )
        // });

        const id = 0;

        const array = projectsArray.map( item => {
            return (
                <ProjectSquare 
                    projectsArray={projectsArray} 
                    switchToInnerView={switchToInnerView}  
                    id={item.id}
                    setSelectedProject={setSelectedProject}
                />
            )
        });

        if (overview) {        
        return (
            <div>
                <div className='grid-container-work'>
                    {array}                   
                </div>
            </div>
        )
    } 
}

export default WorkOverview;


//
// if (overview) {        
//     return (
//         <div>
//             <div className='grid-container-work'>
//                 <div className='aspect-square pointer'>
//                     <div className='canvas center' onClick={onViewChange}>
//                         Project 1
//                     </div>
//                 </div>
//                 <div className='aspect-square pointer'>
//                     <div className='canvas center'>
//                         Project 2
//                     </div>
//                 </div>
//                 <div className='aspect-square pointer'>
//                     <div className='canvas center'>
//                         Project 3
//                     </div>
//                 </div>
//                 <div className='aspect-square pointer'>
//                     <div className='canvas center'>
//                         Project 4
//                     </div>
//                 </div>
//                 <div className='aspect-square pointer'>
//                     <div className='canvas center'>
//                         Project 5
//                     </div>
//                 </div>
//                 <div className='aspect-square pointer'>
//                     <div className='canvas center'>
//                         Project 6
//                     </div>
//                 </div>
                
//             </div>
//         </div>
//     )
// } else {
//     return <Workview2 />;
// }