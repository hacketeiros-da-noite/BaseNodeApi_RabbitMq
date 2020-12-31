import Sequelize from 'sequelize';

import Infinity from '../app/models/Infinity';

import databaseConfig from '../config/database';

const models = [Infinity];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map((model) => model.init(this.connection));
    }
}

export default new Database();
