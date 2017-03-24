'use strict';

class ModuleInfo {
    constructor(name, version) {
        this.name = name;
        this.version = version;
    }
}

class ApplicationStartupParams {
    constructor( serverConfiguration, dbConfiguraiton) {
        this.serverConfiguration = serverConfiguration;
        this.dbConfiguraiton = dbConfiguraiton;
    }
}

class ServerConfiguration {
    constructor(host, port, modulesToLoad, pluginsToLoad) {
        this.host = host;
        this.port = port;
        this.modulesToLoad = modulesToLoad;
        this.pluginsToLoad = pluginsToLoad;
    }
}

class DbConfiguraiton {
    constructor(dbHostname, dbPortNumber, dbUserName, dbPassword, dbName) {
        this.dbHostname = dbHostname;
        this.dbPortNumber = dbPortNumber;
        this.dbUserName = dbUserName;
        this.dbPassword = dbPassword;
        this.dbName = dbName;
    }
}


exports.ModuleInfo = ModuleInfo;
exports.ApplicationStartupParams = ApplicationStartupParams;
exports.ServerConfiguration = ServerConfiguration;
exports.DbConfiguraiton = DbConfiguraiton;