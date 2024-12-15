/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"; // Import React and useState
import "./Bookshelf.css"
import bookImage from '../assets/images/book.png';


const AddNewBook = () => { // Naming convention: Component names should start with a capital letter
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' }
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '' }); // Should be an object instead of an array

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to update the books list with the new book
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' }); // Reset after adding the book
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="title" 
            placeholder="Enter book title" 
            value={newBook.title} 
            onChange={handleInputChange} 
          />
          <input 
            type="text" 
            name="author" 
            placeholder="Enter author name" 
            value={newBook.author} 
            onChange={handleInputChange} 
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="newBookCardDiv">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <img src={bookImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddNewBook;