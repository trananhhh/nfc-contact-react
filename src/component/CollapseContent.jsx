import React, { useEffect, useState } from 'react';
import { copyContent, useThemeDetector } from '../utils';

const CollapseContent = ({ data }) => {
    const theme = useThemeDetector();

    const [content, setContent] = useState(data?.content);

    useEffect(() => {
        setContent(data?.content);
    }, [data]);

    return (
        <div>
            <div
                id={data?.contentId}
                className={
                    'more-details col-full button button--pressed' +
                    (data ? '' : ' hidden ') +
                    theme
                }
            >
                <p
                    onClick={() => copyContent(content, setContent)}
                    className={content === 'Copied!' ? 'highlight-text' : ''}
                >
                    {content}
                </p>
                <a
                    className={
                        'more-details-btn col button button--highlight' + theme
                    }
                    href={data?.link}
                >
                    {data?.buttonLabel}
                </a>
            </div>
            <i className={'copy-hint ' + (data ? '' : 'hidden')}>
                Press content to copy
            </i>
        </div>
    );
};

export default CollapseContent;
