import React from 'react';

const Navbar = (
    {aboutview, 
    setAboutview,
    overview,
    setOverview,
    innerview,
    setInnerview,
    }) => {
    
    const onWorkClick = () => {
       setAboutview(false);
       setOverview(true);
       setInnerview(false);
    };

    const onAboutClick = () => {
        setAboutview(true);
        setInnerview(false);
        setOverview(false);
    }

    // console.log(`work state is ${work}`)

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