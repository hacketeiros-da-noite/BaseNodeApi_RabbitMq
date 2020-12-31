module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.createTable('infinity', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            value: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        }),

    down: async (queryInterface) => queryInterface.dropTable('infinity'),
};
