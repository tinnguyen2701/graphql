const express=  require("express")
const graphqlHTTP = require("express-graphql");
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
mongoose.connect("mongodb://nguyendinhtin27011998:nguyendinhtin27011998@ds331548.mlab.com:31548/graphql-test")
mongoose.connection.once('open', () => {
    console.log('connected db');
    
} )
// middleware
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(4000, () => console.log("server is running"))