import React, { useEffect, useState } from 'react';

const WebSocketComponent = () => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Create a WebSocket connection
    const ws = new WebSocket('ws://192.168.0.110:8082');

    // Handle the WebSocket events
    ws.onopen = () => {
      console.log('Connected to the WebSocket server');
    };

    ws.onmessage = (event) => {
      console.log('Received a message:', event.data);
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Save the WebSocket instance
    setSocket(ws);

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket) {
      socket.send('Hello, server!');
    }
  };

  return (
    <div>
      {/* <h1>WebSocket Demo</h1> */}
      {/* <button onClick={sendMessage}>Send Message</button> */}
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocketComponent;
