import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const NewBooks = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate(); // Initialize navigate for navigation

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(savedBooks);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-5">
        <h1 className="text-3xl font-bold mb-5 text-center">New Books</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <div key={index} className="flex flex-col border rounded-lg p-4 shadow-md bg-white">
              <img
                src={book.image} // Display the book's image
                alt={book.title} // Use the book's title for alt text
                className="h-60 w-full object-center rounded-lg"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{book.title}</h2>
                <h3 className="text-lg text-gray-600">{book.author}</h3>
                <p className="text-sm text-gray-500">First published on: {book.publicationDate}</p>
                <p className="mt-2 text-gray-700">{book.description}</p>
                <Link to={`/edit-books/${book.title}`}>
                <button
                  className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewBooks;
