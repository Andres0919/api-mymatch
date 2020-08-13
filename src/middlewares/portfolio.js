const Portfolio = require('../api/components/portfolios/store')

const checkPortfolio = async ({ headers }, res, next) => {
  const { portfolio_token } = headers
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

  next()
}

module.exports = {
  checkPortfolio,
}
