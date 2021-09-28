import UserController from '../controllers/User.controller.js'
import AuthMiddleware from '../middlewares/Auth.middleware.js'
import AdminMiddleware from '../middlewares/Admin.middleware.js'
import express from 'express'
const router = express.Router()


router.post('/registers', UserController.Store)
router.use(AuthMiddleware)
router.get('/show', UserController.show)
router.put('/updates', UserController.update)
router.delete('/delete', UserController.destroy)
router.get('/', AdminMiddleware, UserController.index)


export default router