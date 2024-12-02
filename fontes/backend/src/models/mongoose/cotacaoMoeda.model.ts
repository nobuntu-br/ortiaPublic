import mongoose, { Mongoose, Schema } from "mongoose"; 
import { CotacaoMoeda } from "../cotacaoMoeda.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.cotacaoMoeda) { 
    return mongooseConnection.models.cotacaoMoeda; 
  } 

  var schema = new mongoose.Schema<CotacaoMoeda>( 
    {
        empreendimento: {type: Schema.Types.ObjectId, ref: 'empreendimento'}, 
        moeda: {type: Schema.Types.ObjectId, ref: 'tabelaMoeda'}, 
      inicioCotacao: Date,
      valorCompraOficial: Number,
      valorVendaOficial: Number,
      valorCompraParalelo: Number,
      valorVendaParalelo: Number,
      valorInterno: Number,
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

  return mongooseConnection.model<CotacaoMoeda>("cotacaoMoeda", schema); 
};
