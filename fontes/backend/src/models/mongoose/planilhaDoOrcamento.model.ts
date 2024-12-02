import mongoose, { Mongoose, Schema } from "mongoose"; 
import { PlanilhaDoOrcamento } from "../planilhaDoOrcamento.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.planilhaDoOrcamento) { 
    return mongooseConnection.models.planilhaDoOrcamento; 
  } 

  var schema = new mongoose.Schema<PlanilhaDoOrcamento>( 
    {
        estabelecimento: {type: Schema.Types.ObjectId, ref: 'estabelecimento'}, 
      nome: String,
      ativo: Boolean,
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

  return mongooseConnection.model<PlanilhaDoOrcamento>("planilhaDoOrcamento", schema); 
};
