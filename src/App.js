import { useState } from 'react';
import AnonyMessage from './component/AnonyMessage';
import BankingButton from './component/BankingButton';
import BankingInfo from './component/BankingInfo';
import ButtonDoubleCol from './component/ButtonDoubleCol';
import ButtonLink from './component/ButtonLink';
import CollapseButton from './component/CollapseButton';
import CollapseContent from './component/CollapseContent';
import Profile from './component/Profile';
import data from './info.json';
import { useThemeDetector } from './utils';

function App() {
    const [collapseData, setCollapseData] = useState(null);
    const [isShowBankingInfo, setIsShowBankingInfo] = useState(true);
    const theme = useThemeDetector();

    const handleCollapse = (data) => {
        setCollapseData((collapseData) =>
            collapseData === data ? null : data
        );
    };

    return (
        <div className={theme}>
            <div className="main grid">
                <Profile />
            </div>

            <div className="social-btns-container row">
                {data.socials.map((item) =>
                    item.type === 'link' ? (
                        <ButtonLink
                            key={item.id}
                            id={item.id}
                            link={item.link}
                            icon={item.icon}
                        />
                    ) : (
                        <CollapseButton
                            key={item.id}
                            onClick={() => handleCollapse(item)}
                            icon={item.icon}
                            pressed={
                                collapseData?.id && collapseData.id === item.id
                            }
                        />
                    )
                )}
            </div>
            <CollapseContent data={collapseData} />
            <div className="row" style={{ zIndex: '99' }}>
                <ButtonDoubleCol iconLink="./img/trananhpremium.png" />
                <BankingButton
                    pressed={isShowBankingInfo}
                    onClick={() => setIsShowBankingInfo(!isShowBankingInfo)}
                />
            </div>
            <BankingInfo
                bankingInfo={data.bankingInfo}
                isShow={isShowBankingInfo}
            />
            <AnonyMessage />
        </div>
    );
}

export default App;
