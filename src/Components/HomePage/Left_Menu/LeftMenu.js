import React from 'react'
import './LeftMenu.css'
import UserImage from '../../Assets/Images/hero.png'
import ShieldIcon from '../../Assets/Icons/shield.svg'
import ColoredPeopleIcon from '../../Assets/Icons/colored-people.svg'
import ColoredMessengerIcon from '../../Assets/Icons/colored-messenger.svg'
import ColoredFlagIcon from '../../Assets/Icons/colored-flag.svg'
import ArrowDownIcon from '../../Assets/Icons/arrow-down.svg'
import StoriesPicOne from '../../Assets/Stories/st-1.jpeg'
import StoriesPicTwo from '../../Assets/Stories/st-2.jpeg'
import StoriesPicThree from '../../Assets/Stories/st-3.jpeg'
import StoriesPageOne from '../../Assets/Stories/page-1.jpg'
import StoriesPageTwo from '../../Assets/Stories/page-2.jpg'
import StoriesPageThree from '../../Assets/Stories/page-3.jpeg'

const LeftMenu = () => {
    return (
        <div class="shortcuts">
      
        <div class="first-col">
                <div class="menu-item">
                    <div class="user">
                        <div class="profile">
                            <img src={UserImage} alt=""/>
                        </div>
                        <h4>Anne</h4>
                    </div>
                </div>

                <div class="menu-item">
                    <div class="item-row">
                        <div class="icon">
                            <img src={ShieldIcon} alt=""/>
                        </div>
                        <h4>COVID-19 Infromation Center </h4>
                    </div>
                </div>

                <div class="menu-item">
                    <div class="item-row">
                        <div class="icon">
                            <img src={ColoredPeopleIcon} alt=""/>
                        </div>
                        <h4>Friends </h4>
                    </div>
                </div>

                <div class="menu-item">
                    <div class="item-row">
                        <div class="icon">
                            <img src={ColoredMessengerIcon} alt=""/>
                        </div>
                        <h4>Messenger </h4>
                    </div>
                </div>

                <div class="menu-item">
                    <div class="item-row">
                        <div class="icon">
                            <img src={ColoredFlagIcon} alt=""/>
                        </div>
                        <h4>Pages </h4>
                    </div>
                </div>

                <div class="menu-item">
                    <div class="item-row  borders">
                        <div class="icon more">
                            <img src={ArrowDownIcon} alt=""/>
                        </div>
                        <h4>see more </h4>
                    </div>
                </div>
            </div>

            <div class="second-col">

                <h6 class="title">
                    your shortcuts
                </h6>
                <div class="menu-item">
                    <div class="item-row">
                        <div class="icon">
                            <img src={StoriesPicOne} alt=""/>
                        </div>
                        <h4>Designers house </h4>
                    </div>
                </div>

                <div class="menu-item">
                    <div class="item-row">
                        <div class="icon">
                            <img src={StoriesPicTwo} alt=""/>
                        </div>
                        <h4>Script house </h4>
                    </div>
                    <div class="menu-item">
                        <div class="item-row">
                            <div class="icon">
                                <img src={StoriesPageOne} alt=""/>
                            </div>
                            <h4>ui ux Designers workshop </h4>
                        </div>
                    </div>

                    <div class="menu-item">
                        <div class="item-row">
                            <div class="icon">
                                <img src={StoriesPicThree} alt=""/>
                            </div>
                            <h4>netflix movies recommends </h4>
                        </div>
                    </div>

                    <div class="menu-item">
                        <div class="item-row">
                            <div class="icon">
                                <img src={StoriesPageTwo} alt=""/>
                            </div>
                            <h4>the futur </h4>
                        </div>
                    </div>


                    <div class="menu-item">
                        <div class="item-row">
                            <div class="icon">
                                <img src={StoriesPageThree} alt=""/>
                            </div>
                            <h4>aj smart </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftMenu;