import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { eBooks } from '../eBooks';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const Viewdetails = () => {
  const { title } = useParams();
  const viewdata = eBooks.find((book) => book.title === title);

  // Fetch the borrow state from localStorage if it exists
  const [isBorrowed, setIsBorrowed] = useState(
    () => JSON.parse(localStorage.getItem(`${title}-isBorrowed`)) || false
  );
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Save the borrow state to localStorage whenever it changes
    localStorage.setItem(`${title}-isBorrowed`, JSON.stringify(isBorrowed));
  }, [isBorrowed, title]);

  const handleBorrow = () => {
    setIsBorrowed(true);
    showMessage('You have borrowed this book.');
  };

  const handleReturn = () => {
    setIsBorrowed(false);
    showMessage('You have returned this book.');
  };

  const showMessage = (msg) => {
    setMessage(msg);

    // Auto-hide message after 1 second
    setTimeout(() => {
      setMessage('');
    }, 1000);
  };

  if (!viewdata) {
    return <p className="text-center text-red-500">Book not found...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-60 bg-gray-100">
      <Card sx={{ display: 'flex', maxWidth: 600, margin: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: '50%', height: 'auto', objectFit: 'cover' }}
          image={viewdata.image}
          alt={`${viewdata.title} cover`}
        />
        <CardContent sx={{ flex: '1 0 ' }}>
          <Typography gutterBottom variant="h5" component="div">
            Title: {viewdata.title}
          </Typography>
          <Typography sx={{ marginTop: 2, marginBottom: 2 }} variant="body2" color="text.secondary">
            <strong>Author:</strong> {viewdata.author}
          </Typography>
          <Typography sx={{ marginTop: 2, marginBottom: 1 }} variant="body2" color="text.secondary">
            <strong>Genre:</strong> {viewdata.genre}
          </Typography>
          <Typography sx={{ marginTop: 2, marginBottom: 2 }} variant="body2" color="text.secondary">
            <strong>Published on:</strong> {viewdata.publicationDate}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
            {viewdata.description}
          </Typography>
          
          <CardActions>
            {!isBorrowed ? (
              <Button 
                sx={{ marginRight: 1, marginTop: 2 }} 
                size="small" 
                variant="contained" 
                color="primary" 
                onClick={handleBorrow}
              >
                Borrow
              </Button>
            ) : (
              <Button 
                sx={{ marginRight: 1, marginTop: 2 }} 
                size="small" 
                variant="contained" 
                color="secondary" 
                onClick={handleReturn}
              >
                Return
              </Button>
            )}
          </CardActions>
          
          {/* Show borrow/return status message with auto-hide */}
          {message && (
            <Alert severity="info" sx={{ marginTop: 2 }}>
              {message}
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Viewdetails;
