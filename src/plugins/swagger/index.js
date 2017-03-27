var AppParams = require('../../core/application-params');

var SwaggerPlugin = function () {

    this.register = function(server, appConfig) {
        server.register([
            require('inert'),
            require('vision'),
            {
                register: require('hapi-swagger'),
                options: {
                    info: {
                        title: 'Task Api',
                        description: 'Task Api Documentation',
                        version: '1.0'
                    },
                    tags: [
                        {
                            'name': 'tasks',
                            'description': 'Api tasks interface.'
                        }
                    ],
                    documentationPage: true,
                    documentationPath: '/docs'
                }
            }
        ], (error) => {
            if (error) {
                console.log('error', error);
            }
        });
    };

    // info!
    this.info = function() {
        return new AppParams.PluginInfo("Swagger Plugin Wrapper", "1.0");
    }
}

exports.default = () => {
    return new SwaggerPlugin();
};