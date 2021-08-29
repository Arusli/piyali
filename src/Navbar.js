import React from 'react';

const Navbar = (
    {work, 
    about, 
    setWork, 
    setAbout,
    overview,
    setOverview,
    innerview,
    setInnerview,
    onViewChange
    }) => {
    
    const onWorkClick = () => {
        if (innerview) {
            setWork(true);
            setAbout(false);
            onViewChange();
        }

        if (overview) {
            setWork(true);
            setAbout(false);
        }

    };

    const onAboutClick = () => {
        setAbout(true);
        setWork(false);
        setInnerview(false);
        setOverview(true);
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