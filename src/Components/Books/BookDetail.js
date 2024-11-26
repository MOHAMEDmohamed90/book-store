// src/components/BookDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = ({ books }) => {
  const { id } = useParams(); // Récupérer l'ID du livre à partir de l'URL
  const book = books.find((b, index) => index === parseInt(id)); // Trouver le livre correspondant à l'ID

  if (!book) {
    return <div>Le livre n'a pas été trouvé.</div>;
  }

  return (
    <div style={{ margin: '20px' }}>
      <h2>Détails du Livre</h2>
      <p><strong>Titre :</strong> {book.title}</p>
      <p><strong>Auteur :</strong> {book.author}</p>
    </div>
  );
};

export default BookDetails;
