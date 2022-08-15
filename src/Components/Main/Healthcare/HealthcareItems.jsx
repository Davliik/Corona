import React from 'react';
import healthcare1 from "../../../img/healthcare/01.svg";
import healthcare2 from "../../../img/healthcare/02.svg";
import healthcare3 from "../../../img/healthcare/03.svg";

const HealthcareItems = () => {
    return (
        <div className="healthcare__items ">
            <div className="healthcare__column healthcare__column_1">
                <div className="healthcare__item item-healthcare">
                    <div className="item-healthcare__icon">
                        <img src={healthcare1} alt="Иконка"/>
                    </div>
                    <div className="item-healthcare__title">Symptom Checker</div>
                    <div className="item-healthcare__text">Check if you are infected by COVID-19 with our Symptom
                        Checker
                    </div>
                </div>
            </div>
            <div className="healthcare__column healthcare__column_2">
                <div className="healthcare__item item-healthcare">
                    <div className="item-healthcare__icon">
                        <img src={healthcare2} alt="Иконка"/>
                    </div>
                    <div className="item-healthcare__title">24x7 Medical support</div>
                    <div className="item-healthcare__text">Consult with 10,000+ health workers about your concerns.
                    </div>
                </div>
            </div>
            <div className="healthcare__column healthcare__column_3">
                <div className="healthcare__item item-healthcare">
                    <div className="item-healthcare__icon">
                        <img src={healthcare3} alt="Иконка"/>
                    </div>
                    <div className="item-healthcare__title">Conditions</div>
                    <div className="item-healthcare__text">
                        Bringing premium healthcare features to your fingertips.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthcareItems;