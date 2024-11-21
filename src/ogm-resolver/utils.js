import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export function createJWT(data) {
  return new Promise((resolve, reject) => {
    jwt.sign(data, "<insert your JWT secret here!>", (err, token) => {
      if (err) {
        return reject(err)
      }

      return resolve(token)
    })
  })
}

export function comparePassword(plainText, hash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plainText, hash, (err, result) => {
      if (err) {
        return reject(err)
      }

      return resolve(result)
    })
  })
}
