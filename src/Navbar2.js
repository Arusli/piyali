import React from 'react';

//I think this navbar links should come pre-loaded with props which will be used to generate the project page. 
//But where should the <project page> be inserted?

const Navbar2 = ({projectsArray}) => {
    
    const array = projectsArray.map( item => {
            return (
                <li>{item.title}</li>
            )
        });
    
    return (
        <div>
            <ul className='flex-row'>
                {array}
            </ul>
        </div>
    )
};

export default Navbar2