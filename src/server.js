'use strict';

const Hapi = require('hapi');


class AppServer {
    
    init ( params ) {

        const serverConfg = params.serverConfiguration || {
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


        // load plugins....
        serverConfg
            .pluginsToLoad
                .forEach((pluginName) => {

                    let plugin = (require("./plugins/" + pluginName)).default();
                        console.log(`Register Plugin ${plugin.info().name} v${plugin.info().version}`);
                    
                    plugin.register(server, params);

                });


        serverConfg
            .modulesToLoad
                .forEach( (moduleName) => {

                    let module = (require("./modules/" + moduleName)).default();
                        console.log(`Register module ${module.info().name} v${module.info().version}`);
                    
                    module.init(server, params);
                });


        return server;
    }

}

exports.AppServer = AppServer;
