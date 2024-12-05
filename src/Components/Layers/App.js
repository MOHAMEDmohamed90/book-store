import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from '../Books/BookList';
import AddBook from '../Books/AddBook';
import EditBook from '../Books/EditBook';
import BookDetails from '../Books/BookDetail';
import QRCode from './QRCode';


const App = () => {
  const [books, setBooks] = useState([
    { title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry' },
    { title: 'Harry Potter à l\'école des sorciers', author: 'J.K. Rowling' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
    { title: 'Moby-Dick', author: 'Herman Melville' },
    { title: 'Les Misérables', author: 'Victor Hugo' },
    { title: 'Don Quixote', author: 'Miguel de Cervantes' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'War and Peace', author: 'Leo Tolstoy' },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
    { title: 'Ulysses', author: 'James Joyce' },
    { title: 'The Divine Comedy', author: 'Dante Alighieri' },
  ]);
  

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
  };

  const updateBook = (index, updatedBook) => {
    const newBooks = books.map((book, i) => (i === index ? updatedBook : book));
    setBooks(newBooks);
  };

  return (
    <Router>
      <div>
        <h3> </h3>
        <Routes>
          <Route path="/" element={<BookList books={books} deleteBook={deleteBook} />} />
          <Route path="/add" element={<AddBook addBook={addBook} />} />
          <Route path="/edit/:id" element={<EditBook books={books} updateBook={updateBook} />} />
          <Route path="/details/:id" element={<BookDetails books={books} />} />
          <Route path="/qr" element={<QRCode />} /> {/* Nouvelle route pour QR Code */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
