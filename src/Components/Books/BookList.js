// src/components/BookList.js
import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books, deleteBook }) => {
  const handleDelete = (index) => {
    if (window.confirm('Voulez-vous vraiment supprimer ce livre ?')) {
      deleteBook(index);
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Liste des Livres</h2>
        <div>
          <Link to="/add" className="btn btn-primary">
            <i className="bi bi-plus-circle"></i> Ajouter un Livre
          </Link>
          <Link to="/qr" className="btn btn-secondary ms-3">
            <i className="bi bi-qr-code-scan"></i> Voir le Code QR
          </Link>
        </div>
      </div>

      {books.length === 0 ? (
        <div className="alert alert-warning text-center" role="alert">
          Aucun livre trouvé. Cliquez sur "Ajouter un Livre" pour commencer.
        </div>
      ) : (
        <table className="table table-hover table-bordered">
          <thead className="table-dark text-center">
            <tr>
              <th>#</th>
              <th>Titre</th>
              <th>Auteur</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index} className="text-center align-middle">
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <Link to={`/details/${index}`} className="btn btn-info btn-sm me-2">
                      <i className="bi bi-eye"></i> Détails
                    </Link>
                    <Link to={`/edit/${index}`} className="btn btn-warning btn-sm me-2">
                      <i className="bi bi-pencil-square"></i> Modifier
                    </Link>
                    <button
                      onClick={() => handleDelete(index)}
                      className="btn btn-danger btn-sm"
                    >
                      <i className="bi bi-trash"></i> Supprimer
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>    
      )}
    </div>
  );
};

export default BookList;
