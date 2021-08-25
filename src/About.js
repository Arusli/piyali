import React from 'react';

const About = ({imageUrl, bio}) => {

    return (
        <div>
            <div className='center'>
                <div className='wrapper'>
                    <div className='grid-container-about'>
                        <div className='profile-pic aspect-square' style={{backgroundImage:`url(${imageUrl})`}}></div>
                    </div>
                    <div className='biography'>
                        {bio}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About;