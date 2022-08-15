import React from 'react';
import GetStarted from "./GetStarted/GetStarted";
import StaySafe from "./StaySafe/StaySafe";
import Experts from "./Experts/Experts";
import Healthcare from "./Healthcare/Healthcare";

const Main = () => {
    return (
        <main className="main">
            <GetStarted/>
            <StaySafe/>
            <Experts/>
            <Healthcare/>
        </main>
    );
};

export default Main;