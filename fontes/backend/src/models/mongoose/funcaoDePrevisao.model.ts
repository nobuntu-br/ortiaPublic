import mongoose, { Mongoose, Schema } from "mongoose"; 
import { FuncaoDePrevisao } from "../funcaoDePrevisao.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.funcaoDePrevisao) { 
    return mongooseConnection.models.funcaoDePrevisao; 
  } 

  var schema = new mongoose.Schema<FuncaoDePrevisao>( 
    {
        empreendimento: {type: Schema.Types.ObjectId, ref: 'empreendimento'}, 
      nome: String,
      tipoFuncao: String,
      parametros: String,
      formula: String,
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

  return mongooseConnection.model<FuncaoDePrevisao>("funcaoDePrevisao", schema); 
};
