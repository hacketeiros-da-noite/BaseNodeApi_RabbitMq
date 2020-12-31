import Sequelize, { Model } from 'sequelize';

class Infinity extends Model {
    static init(sequelize) {
        super.init(
            {
                value: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

export default Infinity;
