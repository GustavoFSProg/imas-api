import { Router } from 'express'
import { register, getAll, login } from '../controller/AuthController'

const authRoutes = Router()

authRoutes.post('/register', register)
authRoutes.get('/', getAll) // TODO: remove before sending to staging
authRoutes.post('/login', login)

export default authRoutes
