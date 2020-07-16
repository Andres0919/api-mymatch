const { sequelize, DataTypes, Model } = require('../../../store')

class Portfolio extends Model {}

Portfolio.init(
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Portfolio', // We need to choose the model name
  }
)

let async = async function () {
  try {
    await Portfolio.sync({ alter: true })
    console.log('Portfolio was synchronized successfully.')
  } catch (error) {
    console.log('[error]', error)
  }
}

async()

module.exports = Portfolio
