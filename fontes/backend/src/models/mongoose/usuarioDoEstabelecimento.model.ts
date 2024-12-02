import mongoose, { Mongoose, Schema } from "mongoose"; 
import { UsuarioDoEstabelecimento } from "../usuarioDoEstabelecimento.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.usuarioDoEstabelecimento) { 
    return mongooseConnection.models.usuarioDoEstabelecimento; 
  } 

  var schema = new mongoose.Schema<UsuarioDoEstabelecimento>( 
    {
        estabelecimento: {type: Schema.Types.ObjectId, ref: 'estabelecimento'}, 
      userPrototipo: String,
      tipoPermissao: String,
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

  return mongooseConnection.model<UsuarioDoEstabelecimento>("usuarioDoEstabelecimento", schema); 
};
