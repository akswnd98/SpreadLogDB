import { Model, DataTypes } from 'sequelize';
import db from '@/db';

export default class EmailAccount extends Model {
  id?: number;
  email?: string;
  pwHash?: string;
  nickname?: string;
};

EmailAccount.init({
  id: {
    field: 'id',
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  email: {
    field: 'email',
    type: DataTypes.TEXT,
    allowNull: false,
  },
  pwHash: {
    field: 'pwHash',
    type: DataTypes.TEXT,
    allowNull: false,
  },
  nickname: {
    field: 'nickname',
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'EmailAccount',
  sequelize: db,
  timestamps: false,
});
