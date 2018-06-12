//Graphql-yoga is like express for graphql.  It takes in the required setup and then 
//routes requests to where they need to go

const { GraphQLServer } = require('graphql-yoga')


const typeDefs = 
`type Query {
    welcome: String!
}`


//This object needs to match the structure of our typeDefinition
//All values should be functions and what they return is like doing a res.send
const resolvers = {
    Query: {
        welcome: ()=>`Hacker News clone begins.`
        //could still call function from other files, etc.
    }
}

//Our server is looking for our typeDefs and our Resolvers
const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log(`Server is running on http://localhost:4000`))