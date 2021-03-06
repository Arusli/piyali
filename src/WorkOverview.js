import React from 'react';
import ProjectSquare from './ProjectSquare.js';

const WorkOverview = (
    {itemsArray, 
    overview, 
    setOverview, 
    innerview, 
    setInnerview, 
    switchToInnerView,
    setSelectedProjectIndex,
    setSelectedProjectName,
    selectedProjectIndex
    }) => {

        console.log('Work Overview Component Renders');

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

        const array = itemsArray.map( item => {
            return (
                <ProjectSquare 
                    itemsArray={itemsArray} 
                    switchToInnerView={switchToInnerView}  
                    id={item.fields.id}
                    setSelectedProjectIndex={setSelectedProjectIndex}
                    setSelectedProjectName={setSelectedProjectName}
                    selectedProjectIndex={selectedProjectIndex}
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