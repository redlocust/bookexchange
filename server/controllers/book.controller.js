import Book from '../models/book';


export function getBooks(req, res) {
  res.send(
    {
      message: 'All books'
    }
  );
}

export function getBook(req, res) {
  res.send(
    {
      message: req.params.bookcode
    }
  );
}


export function deleteBook(req, res) {
  res.send(
    {
      message: `Delete : ${req.params.bookcode}`
    }
  );
}

export function deleteBooks(req, res) {
  res.send(
    {
      message: 'Delete all books'
    }
  );
}

export function addBook(req, res) {
  res.send(
    {
      message: `Add : ${req.params.bookcode}`
    }
  );
}

export function updateBook(req, res) {
  res.send(
    {
      message: `Update: ${req.params.bookcode}`
    }
  );
}