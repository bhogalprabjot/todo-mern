import express from 'express';
import { getListsByUserID, addList, updateList, getListByID, deleteList } from '../controllers/list.js';
import auth from '../middleware/auth.js';


// initialize express router
const router = express.Router();

router.get('/all/:userId', auth, getListsByUserID);
router.get('/:id', auth, getListByID);
router.post('/', auth, addList);
router.put('/:id', auth, updateList);
router.delete('/:id', auth, deleteList);



export default router;
