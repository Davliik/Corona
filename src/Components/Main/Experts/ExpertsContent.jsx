import React from 'react';
import MyButton from "../../../UI/MyButton/MyButton";
import BlockText from "../../../UI/BlockText/BlockText";

const ExpertsContent = () => {
    return (
        <div className="experts__content">
            <BlockText
                blockTextClass={"experts__block-text"}
                title={"Talk to "}
                span={"experts."}
                text={"Book appointments or submit queries into thousands of forums\n" +
                    "concerning health issues and prevention against noval Corona Virus."
                }
                blue
            >
                <a href="/features">
                    <MyButton>Features</MyButton>
                </a>
            </BlockText>
        </div>

    );
};

export default ExpertsContent;