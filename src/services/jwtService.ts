import jwt, { Secret, SignOptions } from 'jsonwebtoken'

const secret: Secret = 'chave-jwt'

export const jwtService = {
  signToken: (payload: string | object | Buffer, expiration: SignOptions['expiresIn']): string => {
    const options: SignOptions = { expiresIn: expiration }
    return jwt.sign(payload, secret, options)
  }
}