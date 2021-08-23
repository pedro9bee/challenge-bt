import express from "express";
import{create, read, update, del, readAll, remove} from '../controllers/Task'

// import {userStoreValidate}  from "../validators/User";

const router = express.Router();
//create task
// router.post('/', taskStoreValidate, create)
router.post('/:idProject', create)
//update task
router.put('/', update)
//delete task
router.delete('/:id', del)
router.delete('/remove/:id', remove)
//get task
router.get('/all/:idProject', readAll)
router.get('/:idProject/:id', read)
 
export default router