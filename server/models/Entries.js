module.exports = (sequelize, DataTypes) => {
  const Entries = sequelize.define("Entries", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,      
    }
  })
  return Entries
}