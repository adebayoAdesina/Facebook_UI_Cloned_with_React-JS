import React from 'react';
import StoriesOne from '../../Assets/Stories/st-1.jpeg'
import storiesTwo from '../../Assets/Stories/st-2.jpeg'
import avatarSix from '../../Assets/Images/5.jpg'
import giftIcon from '../../Assets/Icons/gift.svg'
import arrowDownIcon from '../../Assets/Icons/arrow-down.svg'
import avatarOne from '../../Assets/Images/1.jpg'
import avatarTwo from '../../Assets/Images/2.jpg'
import avatarThree from '../../Assets/Images/3.jpg'
import avatarFour from '../../Assets/Images/4.jpg'
import avatarFive from '../../Assets/Images/5.jpg'
import './Right.css'

const RightMenu = () => {
    return (
        <>
        <div class="shortcuts shortcuts-2">
            <div class="second-col first-col">
                <div class="menu-item">
                    <div class="upper">
                        <h6>Your pages</h6>
                    </div>
                </div>

                <div class="menu-item">
                    <div class="item-row">
                        <div class="icon">
                            <img src={storiesTwo} alt=""/>
                        </div>
                        <h4>Script house </h4>
                    </div>
                </div>

                <div class="menu-item">
                    <div class="item-row">
                        <div class="icon">
                            <img src={StoriesOne} alt=""/>
                        </div>
                        <h4>omar ui design </h4>
                    </div>
                </div>

                <div class="menu-item">
                    <div class="item-row  border">
                        <div class="icon more">
                            <img src={arrowDownIcon} alt=""/>
                        </div>
                        <h4>see more </h4>
                    </div>
                </div>
            </div>
            <div class="second-col">

                <h6 class="title">
                    birthdays
                </h6>
                <div class="menu-item">
                    <div class="item-row">
                        <div class="icon not-rounded">
                            <img src={giftIcon} alt=""/>
                        </div>
                        <h4>it's diana berry's birthday </h4>
                    </div>
                </div>
                <div class="online">
                    <h6 class="title">
                        contact
                    </h6>

                    <div class="user">
                        <div class="profile">
                            <img src={avatarOne} alt=""/>
                        </div>
                        <h4>diana berry</h4>
                    </div>

                    <div class="user">
                        <div class="profile">
                            <img src={avatarFour} alt=""/>
                        </div>
                        <h4>rosie pie</h4>
                    </div>

                    <div class="user">
                        <div class="profile">
                            <img src={avatarTwo} alt=""/>
                        </div>
                        <h4>samantha jones</h4>
                    </div>

                    <div class="user">
                        <div class="profile">
                            <img src={avatarThree} alt=""/>
                        </div>
                        <h4>john doe</h4>
                    </div>

                    <div class="user">
                        <div class="profile">
                            <img src={avatarFour} alt=""/>
                        </div>
                        <h4>stacy jr.</h4>
                    </div>

                    <div class="user">
                        <div class="profile">
                            <img src={avatarFive} alt=""/>
                        </div>
                        <h4>christin sam</h4>
                    </div>

                    <div class="user">
                        <div class="profile">
                            <img src={avatarSix} alt=""/>
                        </div>
                        <h4>kate simon</h4>
                    </div>

                    <div class="user">
                        <div class="profile">
                            <img src={avatarOne} alt=""/>
                        </div>
                        <h4>diana berry</h4>
                    </div>

                    <div class="user">
                        <div class="profile">
                            <img src={avatarTwo} alt=""/>
                        </div>
                        <h4>sarah cerny</h4>
                    </div>

                    <div class="user">
                        <div class="profile">
                            <img src={avatarThree} alt=""/>
                        </div>
                        <h4>josh doe</h4>
                    </div>

                </div>
            </div>

        </div>
        </>
    );
}

export default RightMenu;