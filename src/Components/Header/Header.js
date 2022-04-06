import React from 'react';
import './Header.css';
import FacebookIcon from '../Assets/Icons/facebook.svg'
import HomeIcon from '../Assets/Icons/home.svg'
import FlagIcon from '../Assets/Icons/flag.svg'
import tvIcon from '../Assets/Icons/tv.svg'
import UserIcon from '../Assets/Icons/users.svg'
import CalendarIcon from '../Assets/Icons/calendar.svg'
import PlusIcon from '../Assets/Icons/plus.svg'
import MessengerIcon from '../Assets/Icons/messenger.svg'
import BellIcon from '../Assets/Icons/bell.svg'
import ArrowIcon from '../Assets/Icons/arrow.svg'
import UserImage from '../Assets/Images/hero.png'

const Header = () => {
    return (
    // navbar
    <nav>
        <div class="left-side">
            <div class="logo">
                <img src={FacebookIcon} alt=""/>
            </div>

            <div class="search">
                <input type="text" placeholder="Search Facebook" name="" id=""/>
            </div>
        </div>

        {/* tab icons */}
        <div class="tabs">
            <div class="tab-icon active">
                <div class="icon">
                    <img src={HomeIcon} alt=""/>
                </div>
            </div>

            <div class="tab-icon">
                <div class="icon has-notification">
                    <img src={FlagIcon} alt=""/>
                </div>
            </div>

            <div class="tab-icon">
                <div class="icon">
                    <img src={tvIcon} alt=""/>
                </div>
            </div>

            <div class="tab-icon">
                <div class="icon">
                    <img src={UserIcon} alt=""/>
                </div>
            </div>


            <div class="tab-icon">
                <div class="icon has-notification">
                    <img src={CalendarIcon} alt=""/>
                </div>
            </div>
        </div>

        {/* right side */}
        <div class="right-side">
            <div class="user">
                <div class="profile">
                    <img src={UserImage} alt=""/>
                </div>
                <h4>Anne</h4>
            </div>

            <div class="user-icons">
                <div class="icon">
                    <img src={PlusIcon} alt=""/>
                </div>

                <div class="icon has-notification">
                    <img src={MessengerIcon} alt=""/>
                </div>

                <div class="icon">
                    <img src={BellIcon} alt=""/>
                </div>

                <div class="icon">
                    <img src={ArrowIcon} alt=""/>
                </div>
            </div>
        </div>
    </nav>

    );
}

export default Header;