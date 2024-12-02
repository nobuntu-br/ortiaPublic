import mongoose, { Mongoose, Schema } from "mongoose"; 
import { Indicador } from "../indicador.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.indicador) { 
    return mongooseConnection.models.indicador; 
  } 

  var schema = new mongoose.Schema<Indicador>( 
    {
        empreendimento: {type: Schema.Types.ObjectId, ref: 'empreendimento'}, 
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

  return mongooseConnection.model<Indicador>("indicador", schema); 
};
