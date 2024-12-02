import mongoose, { Mongoose, Schema } from "mongoose"; 
import { CentroDeCusto } from "../centroDeCusto.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.centroDeCusto) { 
    return mongooseConnection.models.centroDeCusto; 
  } 

  var schema = new mongoose.Schema<CentroDeCusto>( 
    {
        empreendimento: {type: Schema.Types.ObjectId, ref: 'empreendimento'}, 
      nome: String,
      codigoEcd: String,
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

  return mongooseConnection.model<CentroDeCusto>("centroDeCusto", schema); 
};
