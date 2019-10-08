import React, {useState} from 'react'
import {graphql} from 'react-apollo'
import {getBooksQuery} from '../queries/queries'
import BookDetails from './BookDetails';

const BookList = ({data}) => {
    const [selected, setSelected] = useState(null);

    const dispayBooks = () => {
        var content = data;
        if(content.loading){
            return (<div>Loading books..</div>)
        }else{
            return content.books.map((book, index) => {
                return (
                    <li key={index.toString()} onClick={() => setSelected(book.id)} >{book.name}</li>
                )
            })
        }
    }

    return <div>
        <ul className="book-list">
            {dispayBooks()}
        </ul>
        <hr/>
        <BookDetails bookId={selected} />
    </div>
}

export default graphql(getBooksQuery)(BookList);