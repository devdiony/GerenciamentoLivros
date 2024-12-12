import { Router } from 'express';
import {create, researchId,researchAll,update,deleted } from '../controllers/livroController'

const router = Router();

router.post('/livros', create); 
router.get('/livros', researchAll);
router.get('/livros/:id',researchId)
router.put('/livros/:id',update)
router.delete('/livros/:id',deleted)

export default router