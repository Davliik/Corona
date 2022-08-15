import React from 'react';
import GetStartedContent from "./GetStartedContent";
import GetStartedImg from "./GetStartedImg";
import GetStartedVideo from "./GetStartedVideo";

const GetStarted = () => {
    return (
        <section className="get-started">
            <div className="get-started__container">
                <GetStartedContent/>
                <GetStartedImg/>
                <GetStartedVideo/>
            </div>
        </section>
    );
};

export default GetStarted;