import React from 'react';
import BlockText from "../../../UI/BlockText/BlockText";
import MyButton from "../../../UI/MyButton/MyButton";

const StaySafeContent = () => {
    return (
        <div className="stay-safe__content">
            <BlockText
                blockTextClass={'stay-safe__block-text'}
                title={'Stay safe with Go '}
                span={'Corona.'}
                text={'24x7 Support and user friendly mobile platform to bring healthcare' +
                    'to your fingertips. Signup and be a part of the new health culture.'}
            >
                <a href="/features">
                    <MyButton>
                        Features
                    </MyButton>
                </a>
            </BlockText>
        </div>
    );
};

export default StaySafeContent;