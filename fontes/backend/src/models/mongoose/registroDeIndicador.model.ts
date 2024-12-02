import mongoose, { Mongoose, Schema } from "mongoose"; 
import { RegistroDeIndicador } from "../registroDeIndicador.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.registroDeIndicador) { 
    return mongooseConnection.models.registroDeIndicador; 
  } 

  var schema = new mongoose.Schema<RegistroDeIndicador>( 
    {
        empreendimento: {type: Schema.Types.ObjectId, ref: 'empreendimento'}, 
        indicador: {type: Schema.Types.ObjectId, ref: 'indicador'}, 
      dataReferencia: Date,
      valorIndicador: Number,
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

  return mongooseConnection.model<RegistroDeIndicador>("registroDeIndicador", schema); 
};
