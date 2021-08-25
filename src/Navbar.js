import React from 'react';

const Navbar = ({work, about, setWork, setAbout}) => {
    
    const onWorkClick = () => {
        setWork(true);
        setAbout(false);
    };

    const onAboutClick = () => {
        setAbout(true);
        setWork(false);
    }

    console.log(`work state is ${work}`)

    return (
        <div>
            <ul className='flex-row'>
                <li>Piyali Sircar | Designer</li>
                <li className='pointer' onClick={onWorkClick}>Work</li>
                <li className='pointer' onClick={onAboutClick}>About</li>
            </ul>
        </div>
    );
       
}

export default Navbar;