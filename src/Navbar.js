import React, {useState} from 'react';

const Navbar = (
    {aboutview, 
    setAboutview,
    overview,
    setOverview,
    innerview,
    setInnerview,
    }) => {
    

    const [workActive, setWorkActive] = useState(true);

    const onWorkClick = () => {
       setAboutview(false);
       setOverview(true);
       setInnerview(false);
       setWorkActive(true);
    };

    const onAboutClick = () => {
        setAboutview(true);
        setInnerview(false);
        setOverview(false);
        setWorkActive(false);
    }

    // console.log(`work state is ${work}`)

    return (
        <div>
            <ul className='flex-row navbar'>
                <li className='title'>Piyali Sircar | Designer</li>
                <li className={workActive ? 'pointer navbar-item highlight' : 'pointer navbar-item'} onClick={onWorkClick}>Work</li>
                <li className={!workActive ? 'pointer navbar-item highlight' : 'pointer navbar-item'} onClick={onAboutClick}>About</li>
            </ul>
        </div>
    );
       
}

export default Navbar;