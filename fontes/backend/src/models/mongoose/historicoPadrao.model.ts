import mongoose, { Mongoose, Schema } from "mongoose"; 
import { HistoricoPadrao } from "../historicoPadrao.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.historicoPadrao) { 
    return mongooseConnection.models.historicoPadrao; 
  } 

  var schema = new mongoose.Schema<HistoricoPadrao>( 
    {
        empreendimento: {type: Schema.Types.ObjectId, ref: 'empreendimento'}, 
      nome: String,
      codigoEcd: String,
        contaDebito: {type: Schema.Types.ObjectId, ref: 'planoDeContas'}, 
        contaCredito: {type: Schema.Types.ObjectId, ref: 'planoDeContas'}, 
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

  return mongooseConnection.model<HistoricoPadrao>("historicoPadrao", schema); 
};
