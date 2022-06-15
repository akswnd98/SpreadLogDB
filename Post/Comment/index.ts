import { Model, DataTypes } from 'sequelize';
import db from '../..';
import EmailAccount from '../../EmailAccount';

export default class Comment extends Model {
  id?: number;
  body?: string;
  postId?: number;
  accountId?: number;
  firstUpload?: Date;
  lastUpdate?: Date;
  EmailAccount?: EmailAccount;
};

Comment.init({
  id: {
    field: 'id',
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  body: {
    field: 'body',
    type: DataTypes.TEXT,
    allowNull: false,
  },
  postId: {
    field: 'postId',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  accountId: {
    field: 'accountId',
    type: DataTypes.INTEGER,
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
  tableName: 'PostComment',
  sequelize: db,
  timestamps: false,
});
