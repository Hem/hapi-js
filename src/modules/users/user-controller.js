
const User = function(id, name) {
    this.id = id;
    this.name = name;
};


const UserController = function(appParams) {

    this.appParams = appParams;

    this.getAllUsers = function( request, reply ) {
        reply([
            new User('1', 'Name for 1'),
            new User('2', 'Name for 2')
        ]);
    };


    this.getUserById = function( request, reply) {
        var id = request.params.id;
        
        reply( new User(id, 'Name of ' + id ) );
    }

};

exports.User = User;
exports.UserController = UserController;
