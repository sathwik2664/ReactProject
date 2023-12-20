import React from 'react';
import Config from './Config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActoinProvider.jsx';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';


const MyChatbot = () => {
    return (
    <div className='chatbotdiv' align="center">
    <Chatbot
        config={Config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        />
    </div>
    );
};

export default MyChatbot;