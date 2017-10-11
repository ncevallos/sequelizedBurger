module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new burger devoured value to false
      defaultValue: false
    },
    // createdAt: {
    // 	type: DataTypes.DATE,
    // 	defaultValue: DataTypes.NOW
    // },
    // updatedAt: {
    // 	type: DataTypes.DATE,
    // 	defaultValue: DataTypes.NOW
    // }
  }, {
    timestamps: false
  }
  );
  return Burger;
};

