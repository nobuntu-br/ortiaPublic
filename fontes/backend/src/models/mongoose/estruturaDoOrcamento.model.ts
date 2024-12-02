import mongoose, { Mongoose, Schema } from "mongoose"; 
import { EstruturaDoOrcamento } from "../estruturaDoOrcamento.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.estruturaDoOrcamento) { 
    return mongooseConnection.models.estruturaDoOrcamento; 
  } 

  var schema = new mongoose.Schema<EstruturaDoOrcamento>( 
    {
        PlanilhaDoOrcamento: {type: Schema.Types.ObjectId, ref: 'planilhaDoOrcamento'}, 
      nome: String,
        funcaoPrevisao: {type: Schema.Types.ObjectId, ref: 'funcaoDePrevisao'}, 
        contaDebito: {type: Schema.Types.ObjectId, ref: 'planoDeContas'}, 
        contaCredito: {type: Schema.Types.ObjectId, ref: 'planoDeContas'}, 
        historicoPadrao: {type: Schema.Types.ObjectId, ref: 'historicoPadrao'}, 
        centroDeCusto: {type: Schema.Types.ObjectId, ref: 'centroDeCusto'}, 
        projeto: {type: Schema.Types.ObjectId, ref: 'projeto'}, 
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

  return mongooseConnection.model<EstruturaDoOrcamento>("estruturaDoOrcamento", schema); 
};
