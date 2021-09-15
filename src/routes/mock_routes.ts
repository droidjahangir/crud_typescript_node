import { Router } from 'express';

import {
  getMockData,
  createMock,
  updateMock,
  deleteMock,
} from '../controllers/mock_controller';

const router = Router();

router.get('/', getMockData);
router.post('/', createMock);
router.patch('/:id', updateMock);
router.delete('/:id', deleteMock);

export default router;
