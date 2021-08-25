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
            <ul class='flex-row'>
                <li>Piyali Sircar | Designer</li>
                <li class='pointer' onClick={onWorkClick}>Work</li>
                <li class='pointer' onClick={onAboutClick}>About</li>
            </ul>
        </div>
    );
       
}

export default Navbar;