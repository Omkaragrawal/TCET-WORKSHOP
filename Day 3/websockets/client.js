const websocketClient = require('websocket').client;

const websocket = new websocketClient();

websocket.connect('ws://localhost:8080');

websocket.on('connect', (connection) => {
    connection.on('error', () => console.log('Websocket connection error'));
    connection.on('close', () => console.log('Websocket connection is closed ;-;'));

    connection.on('message', (message) => {
        console.log(`Received a message: ${message['utf8Data']}`);
    });
    
    connection.send(`Hi, I'm client`);
});
