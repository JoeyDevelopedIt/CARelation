module.exports = function(sequelize, DataTypes) {
    var Vin = sequelize.define("Vin", {
      vin: DataTypes.STRING
    });

    return Vin;
};
  