import React from 'react';
import ExpertsStatistic from "./ExpertsStatistic";
import ExpertsContent from "./ExpertsContent";
import ExpertsVideo from "./ExpertsVideo";

const Experts = () => {
    return (
        <section className="experts">
            <div className="experts__container ">
                <ExpertsStatistic/>
                <div className="experts__body">
                    <ExpertsContent/>
                    <ExpertsVideo/>
                </div>
            </div>
        </section>
    );
};

export default Experts;