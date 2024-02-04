import { useState } from 'react';

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
const API_KEY = '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';
import boat from '../assets/bot.png';
const Chat = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Psychebot AI ask me anything!",
      sentTime: 'just now',
      sender: 'ChatGPT',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user',
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);

    try {
      const response = await processMessageToChatGPT([...messages, newMessage]);
      const content = response.choices[0]?.message?.content;
      if (content) {
        const chatGPTResponse = {
          message: content,
          sender: 'ChatGPT',
        };
        setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
      }
    } catch (error) {
      console.error('Error processing message:', error);
    } finally {
      setIsTyping(false);
    }
  };

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === 'ChatGPT' ? 'assistant' : 'user';
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: "I'm a Student using ChatGPT for learning" },
        ...apiMessages,
      ],
    };

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiRequestBody),
    });

    return response.json();
  }

  return (
    <div className="App">
      <div>
        <div className="flex w-[100%] h-[40px] justify-between flex-row  border-b-[2px] border-[#00CCCD]  mt-[-4px] relative ">
          <div className="flex flex-row cursor-pointer">
            <IoIosArrowBack className="text-[#00CCCD] text-[20px]" />
            <NavLink to="/">
              <p className="text-[16px] font-[800] text-center">Back</p>
            </NavLink>
          </div>
          <div className="w-[100%] mt-[-12px] ">
            <p className="text-[22px] font-[800] text-center">Chat</p>
          </div>
        </div>
        <div>
          <MainContainer className="  my-4  flex flex-col border-[2px] border-[#00CCCD]  rounded-[12px] bg-gradient-to-r from-[#868f96] to-[#596164]">
            <div className="flex flex-row justify-between mx-12 mt-4">
              <img src={boat} alt=" bot" className="w-[100px] h-[100px]" />
              <p className=" botChatText">
                Lets Chat with{' '}
                <span className="[text-shadow:_4px_4px_#2af598]">
                  Psychebot AI
                </span>
              </p>
            </div>
            <ChatContainer className="mt-4 bg-gradient-to-r  from-[#868f96] to-[#596164]">
              <MessageList
                className="mt-4 bg-gradient-to-r from-[#868f96] to-[#596164]"
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator className="bg-gradient-to-r text-[#00CCCD] from-[#868f96] to-[#596164]" content="Psychebot is typing" />
                  ) : null
                }
              >
                {messages.map((message, i) => {
                  
                  return <Message key={i} model={message} />;
                })}
              </MessageList>
              <MessageInput
                  className="mb-2 bg-gradient-to-r  outline-none rounded-[48px] from-[#868f96] to-[#596164] placeholder:text-[#00CCCD]"
                placeholder="Send a Message"
                onSend={handleSendRequest}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </div>
  );
};

export default Chat;
