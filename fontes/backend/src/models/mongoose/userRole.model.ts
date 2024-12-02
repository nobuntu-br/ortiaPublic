import mongoose, { Mongoose, Schema } from "mongoose";

export default function defineModel(mongooseConnection: Mongoose) {

  // Verifica se o modelo já foi criado para a conexão específica (Toda vez que é feito a conexão nova ao banco de dados, é preciso setar os models, porém só pode fazer isso uma vez por conexão, se fizer mais de uma vez dá erro. Por isso é verificado se dentro dos models da conexão existe o model)
  if (mongooseConnection.models.userRole) {
    return mongooseConnection.models.userRole;
  }

  const schema = new mongoose.Schema(
    {
      UserId: {
        type: Schema.Types.ObjectId, ref: 'user',
        required: true,
      },
      RoleId: {
        type: Schema.Types.ObjectId, ref: 'role',
        required: true,
      },

      dbConfig: Object,
    },
    { timestamps: true }
  );

  schema.index(
    { UserId: 1, RoleId: 1 },
    { unique: true }
  );

  schema.set('toJSON', {
    transform: (doc, ret, options) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  });

  schema.set('toObject', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
      ret.id = ret._id.toHexString();
      delete ret._id;
    }
  });


  return mongooseConnection.model("userRole", schema);
};