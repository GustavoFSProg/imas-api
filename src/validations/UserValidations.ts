import { getUserByEmail, isValidEmail, isValidCPF } from '../utils'
import { IUser } from '../interfaces'

export async function validateUpdateUser(data: IUser) {
  const errors = []
  const { email, cpf } = data

  if (!isValidEmail(email)) errors.push('Email inválido')

  if (!isValidCPF(cpf)) errors.push('CPF inválido')

  if (errors.length) return { errors }

  const user = (await getUserByEmail(email)) as IUser

  if (!user) errors.push('Usuário inexistente')

  return { errors, user }
}
