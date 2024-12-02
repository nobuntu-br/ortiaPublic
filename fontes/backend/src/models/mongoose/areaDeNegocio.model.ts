import mongoose, { Mongoose, Schema } from "mongoose"; 
import { AreaDeNegocio } from "../areaDeNegocio.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.areaDeNegocio) { 
    return mongooseConnection.models.areaDeNegocio; 
  } 

  var schema = new mongoose.Schema<AreaDeNegocio>( 
    {
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

  return mongooseConnection.model<AreaDeNegocio>("areaDeNegocio", schema); 
};
