import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Button, FormControl, InputLabel, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    publicationDate: '',
    image: '',
    status: '',
    description: ''
  });

  const [allBooks, setAllBooks] = useState([]);

  const genres = ['Fiction', 'Non-Fiction', 'Fantasy', 'Science Fiction', 'Biography', 'History', 'Romance'];
  const statuses = ['Trending', 'New Release', 'Recently', 'Popular'];

  // Handle input change
  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  // Retrieve books from localStorage on component mount
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setAllBooks(savedBooks);
  }, []);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any fields are empty
    if (!bookData.title || !bookData.author || !bookData.genre || !bookData.publicationDate || !bookData.status || !bookData.description) {
      alert("Please fill in all fields before submitting the form.");
      return; // Stop the submission if any field is empty
    }

    const updatedBooks = [...allBooks, bookData]; // Append new book to the list

    // Save the updated books list to localStorage
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    
    // Update state with new book list
    setAllBooks(updatedBooks);
    alert("Successfully Added Book");
    navigate('/new-books');
    
    // Reset form fields
    setBookData({
      title: '',
      author: '',
      genre: '',
      publicationDate: '',
      image: '',
      status: '',
      description: ''
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        className="bg-white p-6 rounded-md shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Add New Book</h2>

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
          Add Book
        </Button>
      </form>
    </div>
  );
};

export default AddBooks;
