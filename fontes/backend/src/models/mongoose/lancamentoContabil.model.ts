import mongoose, { Mongoose, Schema } from "mongoose"; 
import { LancamentoContabil } from "../lancamentoContabil.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.lancamentoContabil) { 
    return mongooseConnection.models.lancamentoContabil; 
  } 

  var schema = new mongoose.Schema<LancamentoContabil>( 
    {
        estabelecimento: {type: Schema.Types.ObjectId, ref: 'estabelecimento'}, 
        EstruturaDoOrcamento: {type: Schema.Types.ObjectId, ref: 'estruturaDoOrcamento'}, 
      formaLancamento: String,
      tipoLancamento: String,
      numeroLancamentoEcd: String,
      dataLancamento: Date,
      indicadorLancamento: String,
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

  return mongooseConnection.model<LancamentoContabil>("lancamentoContabil", schema); 
};
