const appParams = require('../../core/application-params');

class AppModule {

    init ( server, params ) {
        require('./routes').setupRoutes(server, params);
    }

    info () {
        return new appParams.ModuleInfo('Groups\'s Modules', '1.0.0');
    }
}

exports.AppModule = AppModule;
exports.default = () => {
    return new AppModule();
};

