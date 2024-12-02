import mongoose, { Mongoose, Schema } from "mongoose"; 
import { Empreendimento } from "../empreendimento.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.empreendimento) { 
    return mongooseConnection.models.empreendimento; 
  } 

  var schema = new mongoose.Schema<Empreendimento>( 
    {
      nome: String,
      nomeFantasia: String,
      tipoPessoa: String,
      cnpjcpf: String,
      logomarca: String,
        moedaBase: {type: Schema.Types.ObjectId, ref: 'tabelaMoeda'}, 
      ativo: Boolean,
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

  return mongooseConnection.model<Empreendimento>("empreendimento", schema); 
};
