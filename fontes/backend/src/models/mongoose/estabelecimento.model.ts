import mongoose, { Mongoose, Schema } from "mongoose"; 
import { Estabelecimento } from "../estabelecimento.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.estabelecimento) { 
    return mongooseConnection.models.estabelecimento; 
  } 

  var schema = new mongoose.Schema<Estabelecimento>( 
    {
        areaDeNegocio: {type: Schema.Types.ObjectId, ref: 'areaDeNegocio'}, 
        empreendimento: {type: Schema.Types.ObjectId, ref: 'empreendimento'}, 
      nome: String,
      nomeFantasia: String,
      tipoPessoa: String,
      cnpjcpf: String,
      logomarca: String,
      ativo: Boolean
    },
    { timestamps: true }
  );

  schema.set("toObject", {
    transform: (doc, ret, options) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  });

  return mongooseConnection.model<Estabelecimento>("estabelecimento", schema); 
};
