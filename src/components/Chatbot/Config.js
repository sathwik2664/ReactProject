import { createChatBotMessage } from 'react-chatbot-kit';
// import React from 'react';

const botName=' ';
const Config = {
    initialMessages: [createChatBotMessage(`Ask any question${botName}`)],
    /*
        {
            widgetName:'CogPicture',
            widgetFunc:(props)=> <DogPicture {...props}/>,
        },*/
    botName:botName,
    customStyles:{
        botMessageBox:{backgroundColor:'#5ccc9d',},
        chatButton:{backgroundColor:'#5ccc9d',},
        //Container:{backgroundColor:'#000000'}
        Bubbles:{backgroundColor:'#000000'},

    },
    
};

export default Config;