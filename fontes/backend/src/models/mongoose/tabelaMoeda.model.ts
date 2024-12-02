import mongoose, { Mongoose, Schema } from "mongoose"; 
import { TabelaMoeda } from "../tabelaMoeda.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.tabelaMoeda) { 
    return mongooseConnection.models.tabelaMoeda; 
  } 

  var schema = new mongoose.Schema<TabelaMoeda>( 
    {
      nome: String,
      codigoBC: String,
      simbolo: String,
      siglaBC: String,
      codigoPais: String,
      codigoISO: String,
      siglaISO: String,
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

  return mongooseConnection.model<TabelaMoeda>("tabelaMoeda", schema); 
};
