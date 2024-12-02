import mongoose, { Mongoose, Schema } from "mongoose"; 
import { ConsultaLivroRazao } from "../consultaLivroRazao.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.consultaLivroRazao) { 
    return mongooseConnection.models.consultaLivroRazao; 
  } 

  var schema = new mongoose.Schema<ConsultaLivroRazao>( 
    {
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

  return mongooseConnection.model<ConsultaLivroRazao>("consultaLivroRazao", schema); 
};
