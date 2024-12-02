import mongoose, { Mongoose, Schema } from "mongoose"; 
import { PartidaDoLancamento } from "../partidaDoLancamento.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.partidaDoLancamento) { 
    return mongooseConnection.models.partidaDoLancamento; 
  } 

  var schema = new mongoose.Schema<PartidaDoLancamento>( 
    {
        lancamentoContabil: {type: Schema.Types.ObjectId, ref: 'lancamentoContabil'}, 
        historicoPadrao: {type: Schema.Types.ObjectId, ref: 'historicoPadrao'}, 
        centroDeCusto: {type: Schema.Types.ObjectId, ref: 'centroDeCusto'}, 
        projeto: {type: Schema.Types.ObjectId, ref: 'projeto'}, 
        contaDebito: {type: Schema.Types.ObjectId, ref: 'planoDeContas'}, 
        contaCredito: {type: Schema.Types.ObjectId, ref: 'planoDeContas'}, 
      historico: String,
      valor: Number,
      valorMoedaIndexada: Number,
      valorCotacaoMoeda: Number,
        moedaIndexada: {type: Schema.Types.ObjectId, ref: 'tabelaMoeda'}, 
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

  return mongooseConnection.model<PartidaDoLancamento>("partidaDoLancamento", schema); 
};
