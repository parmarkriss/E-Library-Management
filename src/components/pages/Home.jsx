import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { eBooks as eBooksData } from '../eBooks';

const Home = () => {
  const [status, setStatus] = useState({});
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const categorizedBooks = eBooksData.reduce((acc, ebook) => {
      if (!acc[ebook.status]) {
        acc[ebook.status] = [];
      }
      acc[ebook.status].push(ebook);
      return acc;
    }, {});

    setStatus(categorizedBooks);
  }, []);

  const uniqueGenres = [...new Set(eBooksData.map(ebook => ebook.genre))];
  const uniqueAuthors = [...new Set(eBooksData.map(ebook => ebook.author))];

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setSelectedAuthor(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const filteredBooks = (books) => {
    return books.filter((book) => {
      const matchesGenre = selectedGenre ? book.genre === selectedGenre : true;
      const matchesAuthor = selectedAuthor ? book.author === selectedAuthor : true;

      // Validate and parse book date
      const bookDate = new Date(book.publicationDate);
      const selectedDateParsed = selectedDate ? new Date(selectedDate) : null;
      const matchesDate = selectedDateParsed ? bookDate >= selectedDateParsed : true;

      return matchesGenre && matchesAuthor && matchesDate;
    });
  };

  return (
    <div className="container mx-auto p-6">
      {/* Filter Inputs */}
      <div className="mb-4 flex flex-col md:flex-row md:justify-between">
        <select onChange={handleGenreChange} className="mb-2 md:mb-0 md:mr-2 p-2 border rounded">
          <option value="">Select Genre</option>
          {uniqueGenres.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>

        <select onChange={handleAuthorChange} className="mb-2 md:mb-0 md:mr-2 p-2 border rounded">
          <option value="">Select Author</option>
          {uniqueAuthors.map((author) => (
            <option key={author} value={author}>{author}</option>
          ))}
        </select>

        <input
          type="date"
          onChange={handleDateChange}
          className="p-2 border rounded"
        />
      </div>

      {/* Render categories with filtered books */}
      {Object.keys(status).map((category) => {
        const filtered = filteredBooks(status[category]);
        return filtered.length > 0 ? (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((book) => (
                <Link to={`/details/${book.title}`} key={book.title}>
                  <div className="relative group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex justify-center items-center w-full h-80">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-center" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center">
                        <div className="text-white font-bold text-lg p-2">{book.title}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Home;
