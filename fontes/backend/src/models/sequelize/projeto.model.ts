import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('Projeto', { 
      nome: {
      type: DataTypes.STRING, 
    }, 
      situacao: {
      type: DataTypes.STRING, 
    }, 
      dataConcCanc: {
      type: DataTypes.DATE, 
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
