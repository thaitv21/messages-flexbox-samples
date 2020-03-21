import React, {useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';

const myId = '1111';
const partnerId = '2222';

const messages = [
    // {
    //     senderId: '1111',
    //     message: 'Hello from the future'
    // },
    // {
    //     senderId: '2222',
    //     message: 'Reply from the past'
    // }
];

function LeftMessage({message}) {
    return (
        <span style={styles.messageLeft}>{message.message}</span>
    )
}

function RightMessage({message}) {
    return (
        <span style={styles.messageRight}>{message.message}</span>
    )
}

function App() {
    const [listMessages, setListMessages] = useState(messages);
    const [newMessage, setMessage] = useState(null);
    const handleSendMessage = (event) => {
        if (event.key === 'Enter') {
            console.log('message', newMessage);
            listMessages.push({
                senderId: '2222',
                message: newMessage
            });
            setMessage('');
            setListMessages(listMessages);
        }
    };
    const handleMessageChange = useCallback((event) => {
        const newMsg = event.target.value;
        console.log(newMsg);
        setMessage(newMsg);
    });
    return (
        <div className="App">
            <div style={styles.container}>
                <div style={styles.messagesContainer}>
                    {listMessages.map(item => {
                        if (item.senderId === myId) {
                            return <LeftMessage message={item}/>
                        } else {
                            return <RightMessage message={item}/>
                        }
                    })}
                </div>
                <div style={styles.inputContainer}>
                    <input style={styles.inputMessage}
                           value={newMessage}
                           onChange={handleMessageChange}
                           onKeyPress={handleSendMessage}
                           placeholder={'Type your message here'}/>
                </div>
            </div>
        </div>
    );
}

export default App;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: '100vw',
        height: '100vh'
    },
    messagesContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        margin: 20,
        border: 'solid #000',
        borderWidth: 1,
        padding: 20,
        justifyContent: 'flex-end'
    },
    messageLeft: {
        alignSelf: 'flex-start',
        backgroundColor: '#e6e6e6',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        marginBottom: 10,
    },
    messageRight: {
        alignSelf: 'flex-end',
        backgroundColor: '#ff7146',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        color: 'white',
        marginBottom: 10,
    },
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        flexDirection: 'row',
        display: 'flex',
        borderRadius: 50,
        border: 'solid #000',
        borderWidth: 1,
    },
    inputMessage: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
        borderWidth: 0,
        backgroundColor: 'transparent'
    }
};
