import React from 'react';
import appImg from "../../../img/stay-safe/app.png";

const StaySafeMedia = () => {
    return (
        <div className="stay-safe__media">
            <div className="media-stay-safe">
                <div className="media-stay-safe__image">
                    <img src={appImg} alt="Приложение"/>
                </div>
                <div className="media-stay-safe__item1 media-stay-safe__item"></div>
                <div className="media-stay-safe__item2 media-stay-safe__item"></div>
                <div className="media-stay-safe__item3 media-stay-safe__item"></div>
            </div>
        </div>
    );
};

export default StaySafeMedia;