import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('CotacaoMoeda', { 
      inicioCotacao: {
      type: DataTypes.DATE, 
    }, 
      valorCompraOficial: {
      type: DataTypes.DOUBLE, 
    }, 
      valorVendaOficial: {
      type: DataTypes.DOUBLE, 
    }, 
      valorCompraParalelo: {
      type: DataTypes.DOUBLE, 
    }, 
      valorVendaParalelo: {
      type: DataTypes.DOUBLE, 
    }, 
      valorInterno: {
      type: DataTypes.DOUBLE, 
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
