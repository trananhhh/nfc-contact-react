import React, { useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useThemeDetector } from '../utils';

const AnonyMessage = () => {
    const theme = useThemeDetector();

    const [message, setMessage] = useState('');

    const token = '5920219461:AAEm_LCBltwtL91w0ZZYdDo4mVJ5qm87uvQ';
    const userId = '1688793051';

    const sendMessage = () => {
        const link = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${userId}&text=${message}`;

        fetch(link)
            .then(() => {
                setMessage('Message sent!');
                setTimeout(() => setMessage(''), 2000);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <h4 className="message-title">Anonymous Message</h4>
            <div className={'button button--pressed message-box ' + theme}>
                <ReactTextareaAutosize
                    maxRows={5}
                    className="message-input"
                    placeholder="Let me know..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <button
                    className={
                        'message-send button button--highlight more-details-btn ' +
                        theme
                    }
                    onClick={() => sendMessage()}
                >
                    Send
                </button>
            </div>
        </>
    );
};

export default AnonyMessage;
