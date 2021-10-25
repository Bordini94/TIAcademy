'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pedido.belongsTo(models.Cliente, { foreignKey: 'ClienteId', as: 'pedidos' });
      Pedido.belongsTo(models.Servico, {
        foreignKey: 'ServicoId',
        through: 'ItemPedido', as: 'servicos_ped'
      });
      Pedido.hasMany(models.Cliente, { foreignKey: 'PedidoId', as: 'item_pedidos' });
    }
  };
  Pedido.init({
    ClienteId: DataTypes.INTEGER,
    ServicoId: DataTypes.INTEGER,
    valor: DataTypes.FLOAT(6, 2),
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};