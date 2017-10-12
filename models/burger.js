module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new burger devoured value to false
      defaultValue: false
    },
  }, {
    timestamps: false
  }
  );
  return Burger;
};

