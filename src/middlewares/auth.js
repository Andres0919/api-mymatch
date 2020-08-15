const User = require('../api/components/users/store')

const checkUserAuth = async (req, res, next) => {
  const { portfolio_token } = req.headers
  console.log('req.portfolio :>> ', req.portfolio)
  if (!portfolio_token) {
    res.send({
      message:
        'I need to know what portfolio you are, you send me the portfolio_token',
    })
  }

  const portfolio = await Portfolio.getByToken(portfolio_token)
  if (!portfolio) {
    res.send({
      message:
        'I need to know what portfolio you are, the portfolio_token is incorrect',
    })
  }
  req.portfolio = portfolio
  next()
}

module.exports = {
  checkUserAuth,
}
