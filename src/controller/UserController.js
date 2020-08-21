const User = require('../models/User');
const { uuid } = require('uuidv4')

module.exports = {
    async index(request, response) {
        const users = await User.findAll();
        return response.json(users);
    },

    async store(request, response) {
        const { name,email,phone,password } = request.body;

        const user = await User.create({
            name,
            email,
            phone,
            password,
            registration:uuid(),
        })

        return response.json(user)
    }
}