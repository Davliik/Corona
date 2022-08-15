import React from 'react';
import StaySafeMedia from "./StaySafeMedia";
import StaySafeContent from "./StaySafeContent";

const StaySafe = () => {
    return (
        <section className="stay-safe">
            <div className="stay-safe__container">
                <StaySafeMedia/>
                <StaySafeContent/>
            </div>
        </section>
    );
};

export default StaySafe;