import express from "express";
import{create, read, update, del, readAll, authenticate, remove} from '../controllers/User'
 
// import {userStoreValidate}  from "../validators/User";

const router = express.Router();
//create user
// router.post('/', userStoreValidate, create)
router.post('/', create)
//update user
router.put('/:id', update)
//delete user
router.delete('/:id', del)
router.delete('/remove/:id', remove)
//get user
router.get('/one/:id', read)
router.get('/all', readAll)
//autenticate user
router.post('/login', authenticate)
 
export default router