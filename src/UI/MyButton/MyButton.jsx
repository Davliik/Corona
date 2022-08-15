import React from 'react';
import s from "./MyButton.module.css"

const MyButton = ({children, blue, ...props}) => {

    const rootClasses = [s.button]

    if (blue) {
        rootClasses.push(s.buttonBlue)
    }

    return (
        <button {...props} className={rootClasses.join(' ')}>
            {children}
        </button>
    );
};

export default MyButton;