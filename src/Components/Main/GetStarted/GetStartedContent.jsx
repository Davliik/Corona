import React from 'react';
import BlockText from "../../../UI/BlockText/BlockText";
import MyButton from "../../../UI/MyButton/MyButton";

const GetStartedContent = () => {
    return (
        <div className="get-started__content">
            <BlockText
                blockTextClass={'get-started__block-text'}
                title={'Take care of yours family’s'}
                span={'health.'}
                text={'All in one destination for COVID-19 health queries. Consult\n' +
                    '10,000+\n' +
                    'health workers about your concerns.'}
                blue
            >
                <a href="/get-started">
                    <MyButton>GET STARTED</MyButton>
                </a>
            </BlockText>
        </div>
    );
};

export default GetStartedContent;