import React from 'react';
const BlockText = ({title, span, text, blue, blockTextClass, children}) => {

    const rootClasses = ["block-text__title"]

    if (blue) {
        rootClasses.push("block-text__title_blue")
    }

    return (
        <div className={blockTextClass}>
            <h1 className={rootClasses.join(' ')}>
                {title} <span >{span}</span>
            </h1>
            <div className={"block-text__text"}>
                {text}
            </div>
            {children}
        </div>
    );
};

export default BlockText;