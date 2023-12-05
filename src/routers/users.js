import express from 'express'

import { signin,signup,getUser,getUserById,updateUser,removeUser } from '../controllers/users.js' 

const router = express.Router()

router.post('/signup',signup)
router.post('/signin',signin)
router.get('/user',getUser)
router.get('/user/:id',getUserById)
router.delete('/user/:id',removeUser)
router.put('/user/:id',updateUser)

export default router