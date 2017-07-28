import {Router} from 'express';
const router = Router();

router.route('/').get((req, res) => {
  res.send({message: 'Hello from API'});
});

export default router;