import {gql} from 'apollo-boost'

const getAuthorsQuery = gql`
    {
        authors{
            name,
            age,
            id
        }
    }
`

const getBooksQuery = gql`
    {
        books{
            name,
            genre,
            id
        }
    }
`
// !: required
const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name,
            id
        }
    }
`;

const getBookQuery = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id,
            name,
            genre,
            author {
                id,
                name,
                age,
                books {
                    name,
                    genre,
                    id
                }
            }
        }
    }
`;

export {getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery}