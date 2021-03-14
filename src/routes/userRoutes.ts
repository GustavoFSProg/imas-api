import { Router } from 'express'
import { update, getAll } from '../controller/UserController'

const authRoutes = Router()

authRoutes.put('/users', update)
authRoutes.get('/users', getAll) // TODO: remove before sending to staging

export default authRoutes
