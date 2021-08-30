import React from 'react';

const Navbar = (
    {aboutview, 
    setAboutview,
    overview,
    setOverview,
    innerview,
    setInnerview,
    onViewChange
    }) => {
    
    const onWorkClick = () => {
       setAboutview(false);
       setOverview(true);
       setInnerview(false);
       
        // if (innerview) {
        //     // setWork(true);
        //     setAboutview(false);
        //     onViewChange();
        // }

        // if (overview) {
        //     // setWork(true);
        //     setAboutview(false);
        // }

    };

    const onAboutClick = () => {
        setAboutview(true);
        // setWork(false);
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