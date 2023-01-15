import React, { useState } from 'react';
import { copyContent, useThemeDetector } from '../utils';

const BankingInfo = ({ isShow, bankingInfo }) => {
    const [bankingNumber, setBankingNumber] = useState(bankingInfo[0].number);
    const theme = useThemeDetector();

    return (
        <div
            id="banking-info-container"
            className={'more-info-container ' + (!isShow ? '' : 'hidden')}
        >
            <div className="row">
                <div
                    id="press-here"
                    className={'col col-two-fifth highlight-text ' + theme}
                >
                    <span>
                        <p>Choose</p>
                        <p>a bank</p>
                    </span>
                    <i className="fas fa-arrow-circle-right"></i>
                </div>
                <select
                    id="banking-info__list"
                    className={
                        'col col-three-fifth button highlight-text ' + theme
                    }
                    onChange={(e) => setBankingNumber(e.target.value)}
                    required
                >
                    {bankingInfo.map((item) => (
                        <option value={item.number} key={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <div
                className={
                    'more-details col-full button button--pressed ' + theme
                }
                onClick={() => copyContent(bankingNumber, setBankingNumber)}
            >
                <p className="content">{bankingNumber}</p>
                <span
                    className={
                        'more-details-btn button button--highlight ' + theme
                    }
                >
                    Copy
                </span>
            </div>
        </div>
    );
};

export default BankingInfo;
