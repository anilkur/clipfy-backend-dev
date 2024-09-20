import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Like = sequelize.define("Like", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true, // Otomatik artış sağlanıyor
    primaryKey: true, // Birincil anahtar olarak tanımlıyoruz
  },
  clipId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'likes',
  freezeTableName: true
});

export default Like;
