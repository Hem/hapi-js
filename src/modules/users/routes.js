const Joi = require("joi");
const UserController = require('./user-controller');

function setupRoutes(server, params) {
    
    const userController = new UserController.UserController(params);
    server.bind(userController);

    server.route({
        method: 'GET',
        path: '/api/users',
        config: {
            handler: userController.getAllUsers,
            description: 'Lists all users',
            tags: ['api', 'users']
        }
    });


    server.route({
            method: 'GET',
            path: '/api/user/{id}',
            config: {
                handler: userController.getUserById,
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