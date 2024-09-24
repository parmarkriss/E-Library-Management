import React from 'react';
import { eBooks } from '../eBooks';

const TrendingBooks = () => {
    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-5">Trending Books</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Updated grid classes for responsiveness */}
                {eBooks.filter(book => book.status === "Trending").map((book, index) => (
                    <div key={index} className="flex border rounded-lg p-4 shadow-md flex-col md:flex-row"> {/* Use flex-col on mobile, flex-row on larger screens */}
                        <img
                            src={book.image}
                            alt={book.title}
                            className="h-full w-full object-cover rounded-lg md:w-1/3" // Full width on mobile, 1/3 on larger screens
                        />
                        <div className="ml-4 md:ml-2 md:flex-grow"> {/* Responsive margin and growth for text container */}
                            <h2 className="text-xl font-semibold">{book.title}</h2>
                            <h3 className="text-lg text-gray-600">by {book.author}</h3>
                            <p className="text-sm text-gray-500">First published on: {book.publicationDate}</p>
                            <p className="mt-2">{book.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingBooks;
