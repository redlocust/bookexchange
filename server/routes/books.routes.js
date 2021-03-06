import {Router} from 'express';
import * as BookController from '../controllers/book.controller';
const router = Router();

router.route('/').get((req, res) => {
  res.send({message: 'Hello from API'});
});


router.route('/books').get(BookController.getBooks); //get all books
router.route('/books/:bookcode').get(BookController.getBook); // get one book
router.route('/books/:bookcode').post(BookController.addBook); // add one book
router.route('/books/:bookcode').delete(BookController.deleteBook); // delete book
router.route('/books').delete(BookController.deleteBooks); //delete all books
router.route('/books/:bookcode').put(BookController.updateBook); // update one book

export default router;