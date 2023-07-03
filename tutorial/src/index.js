import React from "react";
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
{
  title: 'Fourth Wing',
  author: 'Rebecca Yarros',
  img: './images/book1.jpg',
  id: 1,
},
{
  title: 'The Housemaid',
  author: 'Freida McFadden',
  img: 'https://m.media-amazon.com/images/I/41zWWzbiHpL._SX331_BO1,204,203,200_.jpg',
  id: 2,
},
];


const BookList = () => {
    return (
        <section className="book-list">
          {books.map( (book) => {
            const {img ,title, author, id} = book
            return <Book {...book} key={book.id}/>
          })} 
        </section>
    );
}

const Book = ({img, title, author }) => {
    return (
        <article className="book">
          <img src={img} alt={title}/>
          <h2> {title} </h2>
          <h4> {author} </h4> 
        </article>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)