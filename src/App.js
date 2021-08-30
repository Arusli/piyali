import React, {useState} from 'react';
import Navbar from './Navbar.js';
import About from './About.js';
import Workview1 from './Workview1.js';
import Project from './Project.js';
import Navbar2 from './Navbar2.js';

// use state to determine which nav item is selected.
// then conditionally render correct component

// async receive all content as object from headless cms.
// distribute content as props to populate appropriate amount of projects/images.

const App = () => {
    const [aboutview, setAboutview] = useState(false);
    const [overview, setOverview] = useState(true);
    const [innerview, setInnerview] = useState(false);
    //Use this projectState to create a project component that reacts to the correct state number!
    //Put project component in this App component. Move as many components here as can.
    const [selectedProject] = useState(0);

    const onViewChange = () => {
        setInnerview(true);
        setOverview(false);
    }

    const aboutArray = ['https://images.squarespace-cdn.com/content/v1/5c3aa4c196e76fd46e68642e/1547353759498-O7ZB3AKO5EIGME02V619/IMG_8583_gaussian.jpg?format=500w', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet dui id enim pretium mollis. Fusce porta dapibus ex id suscipit. Vestibulum vel aliquet metus. Nam nec viverra dolor. Quisque et neque at tortor posuere rhoncus et a ante. Donec a ex eu nisi rhoncus feugiat. Nulla nec nunc lacus. Aenean molestie aliquet pellentesque. Suspendisse ac justo dolor. Etiam nec neque in ex varius tincidunt eu nec risus. Vivamus dictum bibendum odio at porttitor. In dolor nisi, scelerisque sed elementum quis, condimentum ut ex. Nunc sit amet lacus eget ipsum posuere ornare. Nulla maximus hendrerit finibus. Vivamus nec neque. Piyali has a Masters in Interaction Design from TU Delft and a Bachelors degree in Bioengineering from the University of Pennsylvania. She is a multidisciplinary designer, comfortable designing across mediums, with a research by design practice.'];

    // I believe contentful will deliver content as an array of objects.

    const projectsArray = [
        {
            title: 'Project 1',
            id: 1,
            images: ['https://randomwordgenerator.com/img/picture-generator/54e3d6434953ae14f1dc8460962e33791c3ad6e04e507749772f78d49f4cc6_640.jpg', 'https://randomwordgenerator.com/img/picture-generator/55e7d1414d53af14f1dc8460962e33791c3ad6e04e507440762e7adc9f49c1_640.jpg'],
            text: 'Welcome to Project 1: Consectetur adipiscing elit. Nulla sit amet dui id enim pretium mollis. Fusce porta dapibus ex id suscipit. Vestibulum vel aliquet metus. Nam nec viverra dolor. Quisque et neque at tortor posuere rhoncus et a ante. Donec a ex eu nisi rhoncus feugiat. Nulla nec nunc lacus. Aenean molestie aliquet pellentesque. Suspendisse ac justo dolor. Etiam nec neque in ex varius tincidunt eu nec risus. Vivamus dictum bibendum odio at porttitor. In dolor nisi, scelerisque sed elementum quis, condimentum ut ex. Nunc sit amet lacus eget ipsum posuere ornare. Nulla maximus hendrerit finibus. Vivamus nec neque. Piyali has a Masters in Interaction Design from TU Delft and a Bachelors degree in Bioengineering from the University of Pennsylvania. She is a multidisciplinary designer, comfortable designing across mediums, with a research by design practice.'
        },
        {
            title: 'Project 2',
            id: 2,
            images: ['https://randomwordgenerator.com/img/picture-generator/tools-1209764_640.jpg', 'https://randomwordgenerator.com/img/picture-generator/tools-1209764_640.jpg', 'https://randomwordgenerator.com/img/picture-generator/53e6dc404d57ad14f1dc8460962e33791c3ad6e04e507749712e79d0954bcc_640.jpg'],
            text: 'This is Project 2 description: consectetur adipiscing elit. Nulla sit amet dui id enim pretium mollis. Fusce porta dapibus ex id suscipit. Vestibulum vel aliquet metus. Nam nec viverra dolor. Quisque et neque at tortor posuere rhoncus et a ante. Donec a ex eu nisi rhoncus feugiat. Nulla nec nunc lacus. Aenean molestie aliquet pellentesque. Suspendisse ac justo dolor. Etiam nec neque in ex varius tincidunt eu nec risus. Vivamus dictum bibendum odio at porttitor. In dolor nisi, scelerisque sed elementum quis, condimentum ut ex. Nunc sit amet lacus eget ipsum posuere ornare. Nulla maximus hendrerit finibus. Vivamus nec neque.'
        }
    ];

    return (
        <div>
            <Navbar 
            aboutview={aboutview}
            setAboutview={setAboutview}
            overview={overview}
            setOverview={setOverview}
            innerview={innerview}
            setInnerview={setInnerview}
            onViewChange={onViewChange}
            />
            { overview ? 
            <Workview1 
                projectsArray={projectsArray} 
                overview={overview}
                setOverview={setOverview}
                innerview={innerview}
                setInnerview={setInnerview}
                onViewChange={onViewChange}
            /> : null }
            {innerview ? <Navbar2 projectsArray={projectsArray} /> : null}
            {aboutview ? <About imageUrl={aboutArray[0]} bio={aboutArray[1]} /> : null }
            {innerview ? <Project projectsArray={projectsArray} selectedProject={selectedProject} /> : null}
        </div>
    )

}

export default App;