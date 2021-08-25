import React from 'react';

//I think this navbar links should come pre-loaded with props which will be used to generate the project page. 
//But where should the <project page> be inserted?

const Navbar2 = () => {
    return (
        <div>
            <ul className='flex-row'>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
                <li>Project 4</li>
                <li>Project 5</li>
                <li>Project 6</li>
            </ul>
        </div>
    )
};

export default Navbar2