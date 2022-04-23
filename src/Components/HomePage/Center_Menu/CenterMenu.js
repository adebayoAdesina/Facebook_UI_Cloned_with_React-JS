import React, { useState } from 'react';
import './CenterMenu.css';
import './owl.carousel.min.css';
import './owl.theme.default.css';
import Stories from './Stories';
import StoriesOne from '../../Assets/Stories/st-1.jpeg'
import PhotoOne from '../../Assets/Images/2.jpg'
import hero from '../../Assets/Images/hero.png'
import arrowRight from '../../Assets/Icons/arrow-right.svg'
import plusIcon from '../../Assets/Icons/plus.svg'
import videoLiveIcon from '../../Assets/Icons/video-live.svg'
import photosIcon from '../../Assets/Icons/photos.svg'
import smileIcon from '../../Assets/Icons/smile.svg'
import imageIcon from '../../Assets/Icons/image.svg'
import smileTwoIcon from '../../Assets/Icons/smile-2.svg'
import cameraIcon from '../../Assets/Icons/camera.svg'
import commentIcon from '../../Assets/Icons/comment.svg'
import shareIcon from '../../Assets/Icons/share.svg'
import thumbsUpIcon from '../../Assets/Icons/thumbs-up.svg'
import videoRoomIcon from '../../Assets/Icons/video-room.svg'
import avatarOne from '../../Assets/Images/1.jpg'
import postOne from '../../Assets/Posts/1.jpg'
import avatarTwo from '../../Assets/Images/2.jpg'
import avatarThree from '../../Assets/Images/3.jpg'
import avatarFour from '../../Assets/Images/4.jpg'
import avatarFive from '../../Assets/Images/5.jpg'


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
            
            <div class="timeline">
                <div class="view create-post">
                    <div class="input">
                        <div class="user">
                            <div class="profile">
                                <img src={hero} alt=""/>
                            </div>
                        </div>
                        <input type="text" placeholder="What on your mind, Anne?" name="" id=""/>
                    </div>
                    <div class="media">
                        <div class="category">
                            <div class="option">
                                <div class="icon">
                                    <img src={videoLiveIcon} alt=""/>
                                </div>
                                <span>Live video</span>
                            </div>

                            <div class="option">
                                <div class="icon">
                                    <img src={photosIcon} alt=""/>
                                </div>
                                <span>photo/video</span>
                            </div>

                            <div class="option">
                                <div class="icon">
                                    <img src={smileIcon} alt=""/>
                                </div>
                                <span>feeling/activity</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="create-post view smaller-margin">
                    <div class="upper">
                        <div class="title">
                            <div class="icon">
                                <img src={videoRoomIcon} alt=""/>
                            </div>
                            <span>Rooms</span>
                        </div>
                        <a href="">
                            create
                        </a>
                    </div>

                    <div class="owl-carousel owl-theme rooms">
                        <div class="items">
                            <div class="user">
                                <div class="profile">
                                    <img src={hero} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div class="items">
                            <div class="user">
                                <div class="profile">
                                    <img src={avatarOne} alt=""/>
                                </div>
                            </div>
                        </div>
                        
                        <div class="items">
                            <div class="user">
                                <div class="profile">
                                    <img src={avatarThree} alt=""/>
                                </div>
                            </div>
                        </div>
                        
                        <div class="items">
                            <div class="user">
                                <div class="profile">
                                    <img src={avatarFour} alt=""/>
                                </div>
                            </div>
                        </div>
                        

                        <div class="items">
                            <div class="user">
                                <div class="profile">
                                    <img src={avatarTwo} alt=""/>
                                </div>
                            </div>
                        </div>
                        

                        <div class="items">
                            <div class="user">
                                <div class="profile">
                                    <img src={avatarFour} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div class="items">
                            <div class="user">
                                <div class="profile">
                                    <img src={avatarFive} alt=""/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div class="view view-post-container smaller-margin">
                    <div class="view-post">
                        <div class="upper">
                            <div class="d-flex">
                                <div class="user">
                                    <div class="profile">
                                        <img src={avatarFive} alt=""/>
                                    </div>
                                </div>

                                <div class="info">
                                    <h6 class="name">
                                        diana barry
                                    </h6>
                                    <span class="time">1 hour ago</span>
                                </div>
                            </div>

                            <div class="dots">
                                <div class="dot"></div>
                            </div>
                        </div>

                        <div class="desc">
                            <p>Travellimg to the future 🌟 , it's alraedy 2020 🙋‍♂🌈🌴</p>
                        </div>

                        <div class="post-img">
                            <img src={postOne} alt=""/>
                        </div>

                        <div class="actions-container">
                            <div class="action">
                                <div class="icon">
                                    <img src={thumbsUpIcon} alt=""/>
                                </div>
                                <span>
                                    like
                                </span>
                            </div>

                            <div class="action">
                                <div class="icon">
                                    <img src={commentIcon} alt=""/>
                                </div>
                                <span>
                                    comment
                                </span>
                            </div>

                            <div class="action">
                                <div class="icon">
                                    <img src={shareIcon} alt=""/>
                                </div>
                                <span>
                                    share
                                </span>
                            </div>
                        </div>

                        <div class="write-comment">
                            <div class="user">
                                <div class="profile">
                                    <img src={hero} alt=""/>
                                </div>
                            </div>
                            <div class="input">
                                <input type="text" placeholder="Write a comment" name="" id=""/>
                                <div class="media">
                                    <div class="icon">
                                        <img src={cameraIcon} alt=""/>
                                    </div>

                                    <div class="icon">
                                        <img src={imageIcon} alt=""/>
                                    </div>

                                    <div class="icon">
                                        <img src={smileTwoIcon} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="view friends smaller-margin">
                    <div class="upper">
                        <h6>people you may know</h6>
                        <div class="dots">
                            <div class="dot"></div>
                        </div>
                    </div>

                    <div class="owl-carousel owl-theme people">
                        <div class="item">
                            <div class="person-img">
                                <div class="icon">
                                    &times;
                                </div>
                                <img src={avatarOne} alt=""/>
                            </div>

                            <div class="info">
                                <h4>
                                    rosie pie
                                </h4>
                                <span>4 mutual friend</span>
                                <button>
                                    add friend
                                </button>
                            </div>
                        </div>

                        <div class="item">
                            <div class="person-img">
                                <div class="icon">
                                    &times;
                                </div>
                                <img src={avatarFour} alt=""/>
                            </div>

                            <div class="info">
                                <h4>
                                    sarah jones
                                </h4>
                                <span>4 mutual friend</span>
                                <button>
                                    add friend
                                </button>
                            </div>
                        </div>

                        <div class="item">
                            <div class="person-img">
                                <div class="icon">
                                    &times;
                                </div>
                                <img src={avatarThree} alt=""/>
                            </div>

                            <div class="info">
                                <h4>
                                    chris doe
                                </h4>
                                <span>4 mutual friend</span>
                                <button>
                                    add friend
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>

            
            </div>
    );
}

export default CenterMenu;