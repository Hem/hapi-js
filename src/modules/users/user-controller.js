
class User {
    constructor (id, name) {
        this.id = id;
        this.name = name;
    }
}


class UserController {

    constructor ( appParams ) {
        this.appParams = appParams;
    }

    getAllUsers( request, reply ) {
        reply([
            new User('1', 'Name for 1'),
            new User('2', 'Name for 2')
        ]);
    }


    getUserById( request, reply) {
        var id = request.params.id;
        
        reply( new User(id, 'Name of ' + id ) );
    }

}

exports.User = User;
exports.UserController = UserController;
