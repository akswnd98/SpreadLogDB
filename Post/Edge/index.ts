import { Model, DataTypes } from 'sequelize';
import db from '../..';

export default class Edge extends Model {
  id?: number;
  accountId?: number;
  fromId?: number;
  toId?: number;
};

Edge.init({
  id: {
    field: 'id',
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  accountId: {
    field: 'accountId',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fromId: {
    field: 'fromId',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  toId: {
    field: 'toId',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'PostGraphEdge',
  sequelize: db,
  timestamps: false,
});
