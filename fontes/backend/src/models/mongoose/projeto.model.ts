import mongoose, { Mongoose, Schema } from "mongoose"; 
import { Projeto } from "../projeto.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.projeto) { 
    return mongooseConnection.models.projeto; 
  } 

  var schema = new mongoose.Schema<Projeto>( 
    {
        empreendimento: {type: Schema.Types.ObjectId, ref: 'empreendimento'}, 
      nome: String,
      situacao: String,
      dataConcCanc: Date
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

  return mongooseConnection.model<Projeto>("projeto", schema); 
};
