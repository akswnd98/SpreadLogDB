import { Model, DataTypes } from 'sequelize';
import db from '..';
import { PostEdge } from '../relations';

export default class Post extends Model {
  id?: number;
  accountId?: number;
  title?: string;
  body?: string;
  firstUpload?: Date;
  lastUpdate?: Date;
  FromCompare?: PostEdge;
};

Post.init({
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
  title: {
    field: 'title',
    type: DataTypes.TEXT,
    allowNull: false,
  },
  body: {
    field: 'body',
    type: DataTypes.TEXT,
    allowNull: false,
  },
  firstUpload: {
    field: 'firstUpload',
    type: DataTypes.DATE,
    allowNull: false,
  },
  lastUpdate: {
    field: 'lastUpdate',
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'Post',
  sequelize: db,
  timestamps: false,
});
