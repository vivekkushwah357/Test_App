import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import AppText from '../../component/AppText/AppText';

const Prefrence = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const sendMessage = useCallback(() => {
    if (messageInput.trim()) {
      const senderMessage = {text: messageInput, user: 'Sage'};
      setMessages(prevMessages => [...prevMessages, senderMessage]);

      setTimeout(() => {
        const receiverMessage = {
          text: `This is a reply to: ${messageInput}`,
          user: 'Client',
        };
        setMessages(prevMessages => [...prevMessages, receiverMessage]);
      }, 1000);

      setMessageInput('');
    }
  }, [messageInput]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="lightgray" />

      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <Image
            source={require('../../assets/img/dummyimage.png')}
            style={styles.profileImage}
          />
          <AppText size={14} family="PoppinsBold" color="black">
            Sage
          </AppText>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.chatContainer}
        keyboardShouldPersistTaps="handled">
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              message.user === 'Sage'
                ? styles.sentMessage
                : styles.receivedMessage,
            ]}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message..."
          placeholderTextColor="#888"
          value={messageInput}
          onChangeText={setMessageInput}
        />
        <TouchableOpacity
          onPress={sendMessage}
          style={[
            styles.sendButton,
            {backgroundColor: messageInput.trim() ? '#0084ff' : '#ccc'},
          ]}
          disabled={!messageInput.trim()}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  headerContainer: {
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  chatContainer: {
    flexGrow: 1,
    padding: 10,
    paddingBottom: 20,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0084ff',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0e0e0',
  },
  messageText: {
    color: '#fff',
    fontSize: 14,
  },
  inputContainer: {
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    height: 50,
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f1f1f1',
    marginRight: 10,
    fontSize: 14,
    marginBottom: '30%',
  },
  sendButton: {
    position: 'absolute',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 11,
    right: '5%',
    top: '5%',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Prefrence;
