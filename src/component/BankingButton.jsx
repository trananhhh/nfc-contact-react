import React from 'react';
import { useThemeDetector } from '../utils';

const BankingButton = ({ pressed, onClick }) => {
    const theme = useThemeDetector();

    return (
        <button
            className={
                'more-info button col col-half has-more ' +
                (!pressed ? 'button--pressed' : '') +
                theme
            }
            onClick={onClick}
        >
            <i className="fas fa-credit-card"></i>
            <h2 className="more-info__heading">Banking Number</h2>
        </button>
    );
};

export default BankingButton;
