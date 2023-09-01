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
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,   
    }
  })

  Entries.associate = (models) => {
    Entries.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  

  return Entries
}