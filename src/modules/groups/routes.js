const Joi = require("joi");
const Controller = require('./group-controller');

function setupRoutes(server, params) {
    
    const controller = new controller.GroupController(params);
    server.bind(controller);

    server.route({
        method: 'GET',
        path: '/api/users',
        config: {
            handler: controller.getAllUsers,
            description: 'Lists all users',
            tags: ['api', 'users']
        }
    });


    server.route({
            method: 'GET',
            path: '/api/user/{id}',
            config: {
                handler: controller.getUserById,
                description: 'Get user by Id',
                tags: ['api', 'users'],
                validate: {
                    params: {
                        id: Joi.string().required()
                    }
                }
            }
        });
}

exports.setupRoutes = setupRoutes;