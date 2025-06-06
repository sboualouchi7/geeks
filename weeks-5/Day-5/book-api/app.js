const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let books = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
  { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 }
];

app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(book => book.id === bookId);
  
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  
  res.status(200).json(book);
});

app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  
  if (!title || !author) {
    return res.status(400).json({ message: 'Title and author are required' });
  }
  
  const id = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
  
  const newBook = {
    id,
    title,
    author,
    publishedYear: publishedYear || null
  };
  
  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});