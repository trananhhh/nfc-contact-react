import React from 'react';
import { useThemeDetector } from '../utils';

const CollapseButton = ({ onClick, pressed, icon }) => {
    const theme = useThemeDetector();

    return (
        <button
            className={
                'social-btn button col-forth col has-more ' +
                (pressed ? 'button--pressed' : '') +
                theme
            }
            onClick={onClick}
        >
            <i className={icon}></i>
        </button>
    );
};

export default CollapseButton;
