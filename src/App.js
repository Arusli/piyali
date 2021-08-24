import React, {useState} from 'react';
import Navbar from './Navbar.js';

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
            { work ? (<div>Work Content</div>) : (<div>About Content</div>) }
        </div>
    )

}

export default App;