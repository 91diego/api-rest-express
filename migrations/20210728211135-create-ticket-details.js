'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TicketDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addColumn(
      'TicketDetails', // name of Source model
      'ticketId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tickets', // name of Target model
          key: 'id', // key in Target model that we're referencing
        }
      }
    );
    await queryInterface.addColumn(
      'TicketDetails', // name of Source model
      'productId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products', // name of Target model
          key: 'id', // key in Target model that we're referencing
        }
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TicketDetails');
  }
};