'use strict';

const AppServer = require('./server');
const AppParams = require('./core/application-params');


// Server startup configuration
const serverConf = new AppParams.ServerConfiguration(     'localhost', 
                                                            3500, 
                                                            ['users', 'groups'], 
                                                            ['swagger', 'loggers']     );

// Database configuration
const dbConf = new AppParams.DbConfiguraiton(   'dbserverhostname', 
                                                1433, 
                                                'user', 
                                                'pass', 
                                                'any'       );

// App startup params... 
const appParams = new AppParams.ApplicationStartupParams(serverConf, dbConf);



// instance of hapi server...    
const server = new AppServer.AppServer().init( appParams );


// console.info('appParams', appParams);
// console.info('server', server);


// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});