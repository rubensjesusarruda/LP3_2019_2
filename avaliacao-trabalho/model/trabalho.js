const TrabalhoModel = (sequelize, DataTypes) => {

    const Trabalho = sequelize.define('Trabalho', {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        orientador: {
            type: DataTypes.STRING,
            allowNull: false
        },  
        estudante1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estudante2: {
            type: DataTypes.STRING
        },
        estudante3: {
            type: DataTypes.STRING
        },
        area: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dataSubmisao: {
            type: DATAONLY
        },
    }, {});

    return Trabalho;
};

module.exports = TrabalhoModel;