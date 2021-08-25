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
            <h1>Piyali Sircar | Designer</h1>
            <ul>
                <li style={{cursor: 'pointer'}} onClick={onWorkClick}>Work</li>
                <li style={{cursor: 'pointer'}} onClick={onAboutClick}>About</li>
            </ul>
        </div>
    );
       
}

export default Navbar;