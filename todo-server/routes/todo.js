import express from 'express';
import { getListsByUserID, addList, updateList, getListByID, deleteList } from '../controllers/list.js';

// initialize express router
const router = express.Router();

router.get('/', getListsByUserID);
router.get('/:id', getListByID);
router.post('/', addList);
router.put('/:id', updateList);
router.delete('/:id',deleteList);



export default router;
