import React from 'react';
import HealthcareBlockText from "./HealthcareBlockText";
import HealthcareItems from "./HealthcareItems";

const Healthcare = () => {
    return (
        <section className="healthcare">
            <div className="healthcare__container">
                <HealthcareBlockText/>
                <HealthcareItems/>
            </div>
        </section>
    );
};

export default Healthcare;