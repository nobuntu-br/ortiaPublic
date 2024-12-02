import mongoose, { Mongoose, Schema } from "mongoose"; 
import { PlanoDeContas } from "../planoDeContas.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.planoDeContas) { 
    return mongooseConnection.models.planoDeContas; 
  } 

  var schema = new mongoose.Schema<PlanoDeContas>( 
    {
        empreendimento: {type: Schema.Types.ObjectId, ref: 'empreendimento'}, 
      codigoConta: String,
      codigoNatureza: String,
      indicadorConta: String,
      nivel: Number,
      nome: String,
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

  return mongooseConnection.model<PlanoDeContas>("planoDeContas", schema); 
};
