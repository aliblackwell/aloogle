
const AlexaAppServer = require('alexa-app-server');

let server = new AlexaAppServer({
    server_root:__dirname,     // Path to root
    app_dir:"apps",            // Where alexa-app modules are stored
    app_root:"/",        // Service root
    port:8081
});

server.start();
