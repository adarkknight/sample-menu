const express = require('express');
const router = express.Router();

// Sample data (you might want to use a database in a real-world scenario)
const books = [
  { id: 1, title: 'Book 1' },
  { id: 2, title: 'Book 2' },
];

// GET all books
router.get('/', (req, res) => {
  res.json(books);
});

// GET a specific book by ID
router.get('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.json(book);
});

// POST a new book
router.post('/', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT (update) a book by ID
router.put('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body;
  const index = books.findIndex((b) => b.id === bookId);

  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  books[index] = { ...books[index], ...updatedBook };
  res.json(books[index]);
});

// DELETE a book by ID
router.delete('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === bookId);

  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const deletedBook = books.splice(index, 1);
  res.json(deletedBook[0]);
});

module.exports = router;
