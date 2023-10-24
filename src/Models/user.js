const {DataTypes}=require("sequelize");
//const { sequelize } = require("../db");
// Se exporta una funcion a db.js que recibira sequelize como argumanto y conectara 

  module.exports = (sequelize)=>{
        //modelos de sequelize
    const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
    });
  };