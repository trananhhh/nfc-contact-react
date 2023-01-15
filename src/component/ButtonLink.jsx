import React from 'react';
import { useThemeDetector } from '../utils';

const ButtonLink = ({ link, id, icon }) => {
    const theme = useThemeDetector();

    return (
        <div
            id={id}
            onClick={() => window.open(link, '_blank').focus()}
            className={'social-btn button col-forth col' + theme}
        >
            <i className={icon} />
        </div>
    );
};

export default ButtonLink;
