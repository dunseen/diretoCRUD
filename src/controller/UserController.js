const User = require('../models/User');

const bcrypt = require('bcryptjs')

module.exports = {
    async index(request, response) {
        const users = await User.findAll();
        return response.json(users);
    },

    async store(request, response) {
        const { password, email } = request.body;

        const salt = bcrypt.genSaltSync(10);
        const hash = await bcrypt.hash(password, salt);

        const userVerify = await User.findOne({
            where: {
                email: email
            }
        });

        if(userVerify){
            return response.status(400).send('E-mail already exists !');
        }

        try {
            const user = await User.create({
                email,
                password: hash,
            });

            return response.json(user);
        } catch (error) {
            throw new Error(error);
        }

        

    },

    async delete(request, response){
        const { id } = request.params;
        
        const exists = await User.findByPk(id);

        if(!exists) {
            return response.status(404).send('User not found !');
        }

        try {
            await User.destroy({
                where:{
                    id: id
                }
            });
    
            return response.send().status(200);
            
        } catch (error) {
            throw new Error(error);
        }
    }
}