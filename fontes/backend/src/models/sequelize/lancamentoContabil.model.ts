import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('LancamentoContabil', { 
      formaLancamento: {
      type: DataTypes.STRING, 
    }, 
      tipoLancamento: {
      type: DataTypes.STRING, 
    }, 
      numeroLancamentoEcd: {
      type: DataTypes.STRING, 
    }, 
      dataLancamento: {
      type: DataTypes.DATE, 
    }, 
      indicadorLancamento: {
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
