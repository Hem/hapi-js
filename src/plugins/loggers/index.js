const AppParams = require('../../core/application-params');

const Plugin = function() {

    this.register = function(server, appConfig) {
        
        const options = {
            ops: {
                interval: 1000
            },
            reporters: {
                myConsoleReporter: [{
                        module: 'good-console'
                    }, 'stdout']
            }
        };

        server.register({
            register: require('good'),
            options: options
        }, (error) => {
            if (error) {
                console.log('error', error);
            }
        });
    };

    // info!
    this.info = function() {
        return new AppParams.PluginInfo("Logger Plugin Wrapper", "1.0");
    }
}

exports.default = () => {
    return new Plugin();
};