import express from 'express';
import getBookById from './services/books/getBooks.js';
import getBooks from './services/books/getBooks.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/books', (req, res) => {
  try {
    const books = getBooks();
    console.log('byebye');
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting list of books!');
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

app.get('/books/:id', (req, res) => {
  try {
    const { id } = req.params;
    const book = getBookById(id);

    if (!book) {
      res.status(404).send(`Book with id ${id} was not found!`);
    } else {
      res.status(200).json(book);
      console.log(book);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting book by id!');
  }
});
