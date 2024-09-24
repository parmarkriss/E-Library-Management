import React, { useEffect, useState } from 'react';
import { TextField, MenuItem, Button, FormControl, InputLabel, Select } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const EditBooks = () => {
  const { title } = useParams(); 
  const navigate = useNavigate(); // Initialize navigate for navigation
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    publicationDate: '',
    image: '',
    status: '',
    description: ''
  });
  
  const genres = ['Fiction', 'Non-Fiction', 'Fantasy', 'Science Fiction', 'Biography', 'History', 'Romance'];
  const statuses = ['Trending', 'New Release', 'Recently', 'Popular'];

 

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const currentBook = savedBooks.find(book => book.title === title); // Find the book by title

    if (currentBook) {
      setBookData(currentBook); // Set the current book data to state
    }
  }, [title]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBooks = savedBooks.map(book => book.title === title ? bookData : book); // Update the book data

    localStorage.setItem('books', JSON.stringify(updatedBooks)); 
    alert('Updated books successfully');
    navigate('/new-books'); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        className="bg-white p-6 rounded-md shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Edit Book</h2>

        {/* Title Field */}
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          className="mb-4"
          name="title"
          value={bookData.title}
          onChange={handleChange}
          required
          disabled // Disable title field to prevent editing the title
        />

        {/* Author Field */}
        <TextField
          label="Author"
          variant="outlined"
          fullWidth
          className="mb-4"
          name="author"
          value={bookData.author}
          onChange={handleChange}
          required
        />

        {/* Genre Dropdown */}
        <FormControl fullWidth variant="outlined" className="mb-4">
          <InputLabel>Genre</InputLabel>
          <Select
            label="Genre"
            name="genre"
            value={bookData.genre}
            onChange={handleChange}
            required
          >
            {genres.map((genre) => (
              <MenuItem key={genre} value={genre}>
                {genre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Publication Date */}
        <TextField
          label="Publication Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          fullWidth
          className="mb-4"
          name="publicationDate"
          value={bookData.publicationDate}
          onChange={handleChange}
          required
        />

        {/* Image URL */}
        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          className="mb-4"
          name="image"
          value={bookData.image}
          onChange={handleChange}
        />

        {/* Status Dropdown */}
        <FormControl fullWidth variant="outlined" className="mb-4">
          <InputLabel>Status</InputLabel>
          <Select
            label="Status"
            name="status"
            value={bookData.status}
            onChange={handleChange}
            required
          >
            {statuses.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Description */}
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          className="mb-4"
          name="description"
          value={bookData.description}
          onChange={handleChange}
          required
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          className="bg-blue-700 hover:bg-blue-800 text-white"
        >
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
