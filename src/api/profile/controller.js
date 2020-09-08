'use strict'
const Profile = require('./store')

const ProfileController = {
  createOrUpdate: ({ portfolio, body }) => {
    const {
      imgUrl,
      firstName,
      lastName,
      birthDate,
      email,
      cellphone,
      cellphoneAlt,
      jobTitle,
      city,
      country,
      summary,
      aboutMe,
      languages,
      lookingForJob,
    } = body

    return new Promise(async (resolve, reject) => {
      try {
        let profile = {
          imgUrl,
          firstName,
          lastName,
          birthDate,
          email,
          cellphone,
          cellphoneAlt,
          jobTitle,
          city,
          country,
          summary,
          aboutMe,
          languages,
          lookingForJob,
          PortfolioId: portfolio.id,
        }

        const profileExist = await Profile.findByPortfolioId(portfolio.id)
        if (profileExist) {
          const [, updated] = await Profile.updateOne(profileExist.id, profile)
          profile = updated[0]
        } else {
          profile = await Profile.createOne(profile)
        }

        resolve(profile)
      } catch (error) {
        reject(error)
      }
    })
  },
}

module.exports = ProfileController
