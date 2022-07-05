const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("../config")

// accpets a data parameter and returns a signed token
const generateToken = (data) => jwt.sign(data, SECRET_KEY)

// accepts a user and creates a payload with that user's email and admin atatus
const createUserJwt = (creds) => {
    // validateFields({ required: ["email"], obj: creds, location: "token generation" })
  
    const payload = {
      email: creds.email,
      isAdmin: creds.isAdmin || false,
    }
    // returns the result of calling generateToken method on the payload
    return generateToken(payload)
  }

// accepts a function and runs a try catch 
const validateToken = (token) => {
    try {
      const decoded = jwt.verify(token, SECRET_KEY)
      return decoded
    } catch (err) {
      return {}
    }
  }

module.exports = {
    generateToken,
    validateToken,
    createUserJwt,
  }