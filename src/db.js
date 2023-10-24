//configuracion de base de datos(sequelize SQL)

//SEQUELIZE
const {Sequelize}=require('sequelize');//importo el modulo sequelize
  const UserModel = require("./Models/user")//importar todos los modelos aqui



const sequelize = new Sequelize (
    'postgres://nestor:1234@localhost:5432/market-protalento'
    );//se crea una instacia de sequelize con nuestras credenciales

//sincronizo los modelos
UserModel(sequelize);
//Aca van las relaciones
const {User} = sequelize.models

  module.exports = {sequelize, ...sequelize.models}
