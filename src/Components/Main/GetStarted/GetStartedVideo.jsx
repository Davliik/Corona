import React from 'react';
import play from "../../../img/get-started/play.svg";

const GetStartedVideo = () => {
    return (
        <div className="get-started__video">
            <a href="react-app/src/Components/Main/GetStarted/GetStarted" className="video-get-started">
                <div className="video-get-started__icon">
                    <img src={play} alt="Кнопка Play"/>
                </div>
                <div className="video-get-started__body">
                    <div className="video-get-started__title">Stay safe with GoCorona</div>
                    <div className="video-get-started__text">Watch Video</div>
                </div>
            </a>
        </div>
    );
};

export default GetStartedVideo;