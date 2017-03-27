const appParams = require('../../core/application-params');

function AppModule() {

    this.init = function( server, params ) {
        require('./routes').setupRoutes(server, params);
    }

    this.info = function() {
        return new appParams.ModuleInfo('Groups\'s Modules', '1.0.0');
    }
}

exports.AppModule = AppModule;
exports.default = () => {
    return new AppModule();
};

