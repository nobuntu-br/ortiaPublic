import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('PartidaDoLancamento', { 
      historico: {
      type: DataTypes.STRING, 
    }, 
      valor: {
      type: DataTypes.DOUBLE, 
    }, 
      valorMoedaIndexada: {
      type: DataTypes.DOUBLE, 
    }, 
      valorCotacaoMoeda: {
      type: DataTypes.DOUBLE, 
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
