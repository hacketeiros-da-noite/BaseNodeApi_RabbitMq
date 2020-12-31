module.exports = {
    dialect: 'postgres',
    host: process.env.dbhost || '',
    username: process.env.dbuser || '',
    password: process.env.dbpassword || '',
    database: process.env.dbname || '',
    define: {
        timestamps: true,
        undescored: true,
        undescoredAll: true,
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
};
