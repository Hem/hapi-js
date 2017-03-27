function Group (id, name) {
    this.id = id;
    this.name = name;
}


function GroupController (appParams) {

    this.appParams = appParams;


    this.getAllGroups = function( request, reply ) {
        
        reply([
            new Group('1', 'Group One'),
            new Group('2', 'Group Two')
        ]);
    }


    this.getGroupById = function( request, reply ) {

        var id = request.params.id;
        
        reply(new Group(id, 'Name for ' + id ));
    }

}

exports.Group = Group;
exports.GroupController = GroupController;