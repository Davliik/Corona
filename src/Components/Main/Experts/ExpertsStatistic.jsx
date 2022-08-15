import React from 'react';

const ExpertsStatistic = () => {
    return (
        <div className="experts__statistic statistic-experts">
            <div className="statistic-experts__body body-statistic-experts">
                <div className="body-statistic-experts__item">
                    <div className="body-statistic-experts__value">2m</div>
                    <div className="body-statistic-experts__text">Users</div>
                </div>
                <div className="body-statistic-experts__item">
                    <div className="body-statistic-experts__value">78</div>
                    <div className="body-statistic-experts__text">Countries</div>
                </div>
                <div className="body-statistic-experts__item">
                    <div className="body-statistic-experts__value">10,000+</div>
                    <div className="body-statistic-experts__text">Medical experts</div>
                </div>
            </div>
            <div className="statistic-experts__decor statistic-experts__decor1"></div>
            <div className="statistic-experts__decor statistic-experts__decor2"></div>
            <div className="statistic-experts__decor statistic-experts__decor3"></div>
        </div>
    );
};

export default ExpertsStatistic;