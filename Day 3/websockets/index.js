const http = require('http');
const websocketImport = require('websocket').server;
const fs = require('fs/promises');
const path = require('path');



const httpServer = http.createServer((req, res) => {
    console.log("we have received a request");
});

httpServer.listen(8080, () => {
    console.log('Http server running on port 8080');
});

const websocket = new websocketImport({
    "httpServer": httpServer,
});

websocket.on('request', (request) => {
    connection = request.accept(null, request.origin);

    connection.on('open', () => console.log('Websocket connection is on!!!'));
    connection.on('close', () => console.log('Websocket connection is closed ;-;'));

    connection.on('message', async (message) => {
        console.log(`Received a message: ${message['utf8Data']}`);

        switch(message['utf8Data']) {
            case 'video':
                const videoFile = await fs.readFile(path.join(__dirname, 'One Piece Opening Theme 20 Hope.mp4'));
                connection.send(videoFile);
                break;
            case 'audio':
                const audioFile = await fs.readFile(path.join(__dirname, 'Audio.mp3'));
                connection.send(audioFile);
                break;
            case 'image':
                const imageFile = await fs.readFile(path.join(__dirname, 'Indian Army Pangong Tso.jpg'));
                connection.send(imageFile);
                break;
            default:
                connection.send(`Confirmation for received message: ${message['utf8Data']}`);

        }
    });

});

