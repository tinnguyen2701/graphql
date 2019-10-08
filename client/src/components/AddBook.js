import React, {useState} from 'react'
import {graphql} from 'react-apollo'
import {flowRight as compose} from 'lodash';
import {getAuthorsQuery, getBooksQuery, addBookMutation} from '../queries/queries'

const AddBook = (data) => {

    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();
        data.addBookMutation({
            variables: {
                name,
                genre,
                authorId
            },
            refetchQueries: [{query: getBooksQuery}]
        });
    }

    const displayAuthors = () => {
        const content = data.getAuthorsQuery;
        if(content.loading){
            return (<option disabled>Loading Authors..</option>)
        }else{
            return content.authors.map((author, index) => <option key={index.toString()} value={author.id}>{author.name}</option>)
        }
    }

    return <div>
        <form onSubmit={(e) => onSubmitHandler(e)}>
            Book name <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/>
            Genre <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)}/><br/>
            Author <select value={authorId} onChange={e=> setAuthorId(e.target.value)}>
                <option>Select author</option>
                    {displayAuthors()}
            </select><br/>
            <button type="submit">+</button>
        </form>
    </div>
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);