import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { StreamChat } from 'stream-chat';
import { ImageBackground, Image, Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from "expo-router";

const backgroundImage = require('../../assets/images/png/010c80.png');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const navigate = useNavigation();

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
    <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../../assets/images/splash1.png')} />
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{ _id: 'unique-user-id' }} // Needs to match the user ID specified in setUser
        style={styles.giftedChat}
      />
      <Pressable style={styles.backArrowHitBox} onPress={() => { navigate.goBack() }}>
        <Image style={styles.backArrow} source={require('../../assets/images/png/backArrow.png')} />
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  tinyLogo: {
    width: 150,
    height: 70,
    position: 'absolute',
    alignSelf: 'center',
  },
  giftedChat: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
  backArrowHitBox: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 45,
    right: 20,
  },
  backArrow: {
    width: 35,
    height: 35,
  },
  fontID: {
    fontFamily: 'Cabin Condensed',
    fontSize: 16,
  }
});

export default Chat;