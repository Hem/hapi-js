class Group {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}


class GroupController {

    constructor( appParams ){
        this.appParams = appParams;
    }


    getAllUsers ( request, reply ) {
        reply([
            new Group('1', 'Group One'),
            new Group('2', 'Group Two')
        ]);
    }


    getUserById( request, reply ) {
        var id = request.params.id;
        
        reply(new User(id, 'Name for ' + id ));
    }

}

exports.Group = Group;
exports.GroupController = GroupController;