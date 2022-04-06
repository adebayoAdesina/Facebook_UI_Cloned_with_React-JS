import React from 'react';
import './CenterMenu.css';

function CenterMenu() {
    return (
        <div class="posts">
            <div class="stories">
                <div class="owl-controls">
                    <div class="owl-nav">
                        <div class="controllers nxtBtn">
                            <img src="img/icons/arrow-right.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="owl-carousel owl-theme slider">
                <div class="item">
                    <div class="overlay first">
                        <div class="create">
                            <div class="icon">
                                <img src="img/icons/plus.svg" alt=""/>
                            </div>
                            <span>Create a Story</span>
                        </div>
                    </div>
                    <div class="story-image">
                        <img src="img/avatar/hero.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CenterMenu;