'use strict';

const Hapi = require('hapi');


class AppServer {
    
    init ( params ) {

        var serverConfg = params.serverConfiguration || {
                                                                host: 'localhost',
                                                                port: 5000
                                                        };

        // Create a server with a host and port
        const server = new Hapi.Server();
        
        server.connection({ 
            host: serverConfg.host, 
            port: serverConfg.port
        });

        // Add the route
        server.route({
            method: 'GET',
            path:'/hello', 
            handler: function (request, reply) {

                return reply('hello world');
            }
        });


        ['users'].forEach( (moduleName) => {

            var module = (require("./modules/" + moduleName)).default();
                console.log(`Register module ${module.info().name} v${module.info().version}`);
            
            module.init(server, params);

        });


        return server;
    }

}

exports.AppServer = AppServer;
