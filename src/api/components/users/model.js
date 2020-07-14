const { sequelize, DataTypes, Model } = require('../../../store')

class User extends Model {}

User.init(
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
    modelName: 'User', // We need to choose the model name
  }
)

let async = async function () {
  try {
    await User.sync({ alter: true })
    console.log('All models were synchronized successfully.')
  } catch (error) {
    console.log('[error]', error)
  }
}

async()

module.exports = User
