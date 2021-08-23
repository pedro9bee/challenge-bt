import express from "express";
import{create, read, update, del, readAll, remove} from '../controllers/Project'
 
// import {userStoreValidate}  from "../validators/Project";

const router = express.Router();
//create Project
// router.post('/', userStoreValidate, create)
router.post('/', create)
//update Project
router.put('/:id', update)
//delete Project
router.delete('/:id', del)
router.delete('/remove/:id', remove)
//get Project
router.get('/one/:id', read)
router.get('/all', readAll)
 
export default router