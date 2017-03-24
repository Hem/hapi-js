const Joi = require("joi");
const Controller = require('./group-controller');

function setupRoutes(server, params) {
    
    const controller = new Controller.GroupController(params);
    server.bind(controller);

    server.route({
        method: 'GET',
        path: '/api/groups',
        config: {
            handler: controller.getAllGroups,
            description: 'List all groups',
            tags: ['api', 'groups']
        }
    });


    server.route({
            method: 'GET',
            path: '/api/group/{id}',
            config: {
                handler: controller.getGroupById,

                description: 'Get group by id',
                tags: ['api', 'groups'],
                validate: {
                    params: {
                        id: Joi.string().required()
                    }
                }
            }
        });
}

exports.setupRoutes = setupRoutes;