import React from 'react';
import './Stories.css';


const Stories = ({ stories }) => {
    return (
        <div class="item">
            <div class="overlay">
                <div class="person">
                    <div class="profile">
                        <img src={stories.profilePic} alt=""/>
                    </div>
                </div>
                <h4> {stories.name }</h4>
            </div>
            <div class="story-image">
                <img src={stories.Stories} alt=""/>
            </div>
        </div>
    );
}

export default Stories;