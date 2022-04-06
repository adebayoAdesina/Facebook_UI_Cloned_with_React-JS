import React, { useState } from 'react';
import './CenterMenu.css';
import './owl.carousel.min.css';
import './owl.theme.default.css';
import Stories from './Stories';
import PhotoOne from '../../Assets/Images/2.jpg'
import hero from '../../Assets/Images/hero.png'
import StoriesOne from '../../Assets/Stories/st-2.jpeg'
import arrowRight from '../../Assets/Icons/arrow-right.svg'
import plusIcon from '../../Assets/Icons/plus.svg'

function CenterMenu() {

    const [storiesDetail, setStoriesDetail] = useState([
        {
            name : 'John',
            profilePic : PhotoOne,
            'Stories' : StoriesOne,
        },
        {
            name : 'John',
            profilePic : PhotoOne,
            'Stories' : StoriesOne,
        },
        {
            name : 'John',
            profilePic : PhotoOne,
            'Stories' : StoriesOne,
        }
    ])

    return (
        <div class="posts">
            <div class="stories">
                <div class="owl-controls">
                    <div class="owl-nav">
                        <div class="controllers nxtBtn">
                            <img src={arrowRight} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="owl-carousel owl-theme slider">
                <div class="item">
                    <div class="overlay first">
                        <div class="create">
                            <div class="icon">
                                <img src={plusIcon} alt=""/>
                            </div>
                            <span>Create a Story</span>
                        </div>
                    </div>
                    <div class="story-image">
                        <img src={hero} alt=""/>
                    </div>
                </div>
                {
                storiesDetail.length != 0 ? storiesDetail.map((stories, i)=> (<Stories stories={stories}/>)) : <div></div>
                }
            </div>

        </div>
    );
}

export default CenterMenu;