import React from 'react'
import {graphql} from 'react-apollo'
import {getBookQuery} from '../queries/queries'

const BookDetails = ({data}) => {
    return data.book ? <div>
        <p>ten sach: {data.book.name}</p>
        <p>the loai: {data.book.genre}</p>
        <p>tac gia: {data.book.author.name}</p>
        <p>all books by this author</p>
        <ul>
            {data.book.author.books.map((book, index) => <li key={index.toString()}>{book.name} - {book.genre}</li>)}
        </ul>
    </div> : ''
}

export default graphql(getBookQuery,{
    options: ({bookId}) => {
        return {
            variables: {
                id: bookId
            }
        }
    }
})(BookDetails)