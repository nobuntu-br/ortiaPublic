import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('Estabelecimento', { 
      nome: {
      type: DataTypes.STRING, 
    }, 
      nomeFantasia: {
      type: DataTypes.STRING, 
    }, 
      tipoPessoa: {
      type: DataTypes.STRING, 
    }, 
      cnpjcpf: {
      type: DataTypes.STRING, 
    }, 
      logomarca: {
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
