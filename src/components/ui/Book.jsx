import React, { useEffect, useState, useRef } from "react";
import Ratings from "../ui/Ratings"
import Price from "../ui/Price"
import { Link } from "react-router-dom";


const Book = ({ book }) => {
    
  return (
    <div className="book">
            <Link to={`/books/${book.id}`}>
                <figure className="book__img--wrapper">
                    <img
                      src={book.url}
                      alt=""
                      className="book__img"
                    />
                </figure>
            </Link>
            <div className="book__title">
                <Link to={`/books/${book.id}`} className="book__title--link">
                    {book.title}
                </Link>
            </div>
            <Ratings rating={book.rating} />
            <Price
              salePrice={book.salePrice}
              originalPrice={book.originalPrice}/>         
    </div>
  );
};

export default Book;
