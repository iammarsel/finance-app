module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,      
    }
  })

  Users.associate = (models) => {
    Users.hasMany(models.Entries,{
      onDelete: "cascade", // removes anything part of user on delete
    })
  }
  return Users;
}