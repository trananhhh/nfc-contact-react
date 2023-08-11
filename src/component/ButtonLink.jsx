import React from 'react';
import { useThemeDetector } from '../utils';

const ButtonLink = ({ link, id, icon, isIconUrl }) => {
    const theme = useThemeDetector();

    return (
        <div
            id={id}
            onClick={() => window.open(link, '_blank').focus()}
            className={'social-btn button col-forth col' + theme}
        >
            {isIconUrl ? (
                <img
                    src={process.env.PUBLIC_URL + icon}
                    alt="icon"
                    style={{ height: '100%', width: '100%', padding: 16 }}
                />
            ) : (
                <i className={icon} />
            )}
        </div>
    );
};

export default ButtonLink;
