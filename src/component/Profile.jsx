import React from 'react';
import data from '../info.json';
import { useThemeDetector } from '../utils';

const Profile = () => {
    const theme = useThemeDetector();

    return (
        <div>
            <div className={'profile button' + theme}>
                <div className={'avatar-frame button button--pressed' + theme}>
                    <img
                        src={data.imgUrl}
                        alt=""
                        className="avatar-frame__img"
                    />
                </div>
                <h1 className="profile__name">{data.name}</h1>
                <p className="profile__descriptions">{data.bio}</p>
                <a
                    href={data.vcfUrl}
                    className={
                        'profile__add-to-contact-btn button button--highlight' +
                        theme
                    }
                >
                    <h5>Add to contact</h5>
                </a>
            </div>
        </div>
    );
};

export default Profile;
