import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { StreamChat } from 'stream-chat';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const initializeChat = async () => {
      const chatClient = new StreamChat('YOUR_API_KEY');
      await chatClient.setUser(
        {
          id: 'unique-user-id', // Unique identifier for the user
          name: 'John Doe', // Display name of the user
        },
        'YOUR_USER_TOKEN' // User token obtained after authentication
      );

      setClient(chatClient);

      const chatChannel = chatClient.channel('messaging', 'channel-id'); // Specify the type of channel and the unique channel ID
      setChannel(chatChannel);

      const { messages } = await chatChannel.watch(); // Retrieve existing messages in the channel
      setMessages(messages);
    };

    initializeChat();

    return () => {
      if (client) {
        client.disconnect();
      }
    };
  }, []);

  const onSend = async (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));

    await channel.sendMessage({
      text: newMessages[0].text,
      user: {
        id: newMessages[0].user._id,
        name: newMessages[0].user.name,
      },
    });
  };

  return (  
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{ _id: 'unique-user-id' }} // Needs to match the user ID specified in setUser
    />
  );
};

export default Chat;