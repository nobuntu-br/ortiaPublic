import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('TabelaMoeda', { 
      nome: {
      type: DataTypes.STRING, 
    }, 
      codigoBC: {
      type: DataTypes.STRING, 
    }, 
      simbolo: {
      type: DataTypes.STRING, 
    }, 
      siglaBC: {
      type: DataTypes.STRING, 
    }, 
      codigoPais: {
      type: DataTypes.STRING, 
    }, 
      codigoISO: {
      type: DataTypes.STRING, 
    }, 
      siglaISO: {
      type: DataTypes.STRING, 
    }, 
      ativo: {
      type: DataTypes.BOOLEAN, 
    }, 
  }); 
  schema.prototype.toJSON = function() { 
    const values = Object.assign({}, this.get()); 

    values.id = values.id; 
    delete values._id; 
    delete values.__v; 
    return values; 
  }; 

  return schema; 
};
