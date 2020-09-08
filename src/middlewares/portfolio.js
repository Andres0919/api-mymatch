const response = require('../network/response')
const Portfolio = require('../api/portfolios/store')

const checkPortfolio = async (req, res, next) => {
  try {
    const { portfolio_token } = req.headers

    if (!portfolio_token) {
      return response.error(
        req,
        res,
        {
          message:
            'I need to know what portfolio you are, you send me the portfolio_token',
        },
        401
      )
    }

    const portfolio = await Portfolio.getByToken(portfolio_token)
    if (!portfolio) {
      return response.error(
        req,
        res,
        {
          message:
            'I need to know what portfolio you are, the portfolio_token is incorrect',
        },
        401
      )
    }

    req.portfolio = portfolio
    next()
  } catch (message) {
    return response.error(req, res, {
      message:
        'I need to know what portfolio you are, the portfolio_token is incorrect',
    })
  }
}

module.exports = {
  checkPortfolio,
}
