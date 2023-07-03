import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
    return (
        <section className="book-list">
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </section>
    );
}

const Book = () => {
    return (
        <article className="book">
            <Image/>
            <Title/>
            <Author/>
        </article>
    )
}

const Image = () => <img src='./images/book1.jpg' alt='Fourth Wing'/>;
const Title = () => {
    return <h2> Fourth Wing </h2>;
};
const Author = () => {
    return (
<h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
    Rebecca Yarros</h4> 
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)