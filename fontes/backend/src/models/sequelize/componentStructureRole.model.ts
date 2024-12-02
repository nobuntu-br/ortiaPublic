import { Sequelize } from "sequelize";

export default function defineModel(sequelize: Sequelize) {
  const schema = sequelize.define('ComponentStructureRole', {}, {
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['RoleId', 'ComponentStructureId'],
      },
    ],
  });

  schema.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());

    values.id = values.id;
    delete values._id;
    delete values.__v;
    return values;
  };

  return schema;
};
