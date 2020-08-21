'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
       id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
       },
       name: {
         type: Sequelize.STRING,
         allowNull: false
       },
       registration: {
         type: Sequelize.UUID,
         allowNull: false
       },
       email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
      });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
     
  }
};