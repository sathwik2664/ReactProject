import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        if(message.includes('hello') || message.includes('Hello')){
        
        actions.handleHello();
        }
        if(message.includes('ola')){
        
            actions.ola();
            }
        if(message.includes('my name is siddartha') || message.includes('My name is siddartha') || message.includes('my name is siddu') || message.includes('siddartha') || message.includes('siddu')|| message.includes('Siddu') || message.includes('Siddu') ){
        
            actions.siddu();
           }
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
            parse: parse,
            actions,
        });
        })}
    </div>
    );
};

export default MessageParser;