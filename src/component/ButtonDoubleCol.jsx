import React from 'react';
import { useThemeDetector } from '../utils';

const ButtonDoubleCol = ({ iconLink }) => {
    const theme = useThemeDetector();
    const link = 'http://trananhpremium.com/';

    return (
        <button
            className={'more-info button col col-half has-more' + theme}
            onClick={() => window.open(link, '_blank').focus()}
        >
            <img src={iconLink} alt="" />
            <h2 className="more-info__heading">Tran Anh Premium</h2>
        </button>
    );
};

export default ButtonDoubleCol;
