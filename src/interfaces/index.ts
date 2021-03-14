export interface IUser {
  firstname?: string
  lastname?: string
  email: string
  password: string
  roles: Array<string>
  phoneNumber?: string
  cpf?: string
}
