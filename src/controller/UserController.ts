import { Request, Response } from 'express'
import User from '../models/User'
import { validateUpdateUser } from '../validations/UserValidations'
import { USER_FIELDS } from '../utils'

export async function update(req: Request, res: Response) {
  try {
    const { errors, user } = await validateUpdateUser(req.body)

    if (errors.length) return res.status(404).send({ errors })

    const updatedUser = User.updateOne(user, { ...req.body }, { fields: USER_FIELDS })

    return res.status(200).send(updatedUser)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export async function getAll(req: Request, res: Response) {
  try {
    const data = await User.find({}, USER_FIELDS)

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}
