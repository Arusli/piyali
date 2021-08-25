import React, {useState} from 'react';
import Navbar from './Navbar.js';
import About from './About.js';
import Work from './Work.js';

// use state to determine which nav item is selected.
// then conditionally render correct component

const App = () => {

    const [work, setWork] = useState(true);
    const [about, setAbout] = useState(false);

    return (
        <div>
            <Navbar 
            work={work}
            about={about}
            setWork={setWork}
            setAbout={setAbout}
            ></Navbar>
            { work ? <Work /> : <About /> }
        </div>
    )

}

export default App;