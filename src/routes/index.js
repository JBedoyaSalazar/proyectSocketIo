import { Router } from 'express';
import path from 'path';

const router = Router()
const viewsPath = path.resolve('src', 'views');

router.get('/', (req, res) => {
  res.sendFile(path.join(viewsPath, 'index.html'));
});

export default router;