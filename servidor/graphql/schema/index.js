const { makeExecutableSchema } = require('graphql-tools');
const { constraintDirective, constraintDirectiveTypeDefs } = require('graphql-constraint-directive');

const typeDefs = ` 

type User {
    _id: ID!
    Username: String!
    Password: String!
    FirstName: String!
    LastName: String!
    fechaCreacion: String!
    Rol: String!
},

input userInput {
    Username: String!   @constraint(minLength: 5, maxLength: 50)
    Password: String!   @constraint(pattern: "^[0-9a-zA-Z]*$", minLength: 5, maxLength: 15)
    FirstName: String!  @constraint(minLength: 5, maxLength: 50)
    LastName: String!   @constraint(minLength: 5, maxLength: 50)
    Rol: String!
}

type RootQuery {
    usuarios: [User!]!
}

type RootMutation {
    registrarUser(userInput: userInput): User!
    eliminarUser(_id: String!): Boolean!
}

schema {
	query: RootQuery
	mutation: RootMutation 
}
 `;

const schema = makeExecutableSchema({
    typeDefs: [constraintDirectiveTypeDefs, typeDefs],
    schemaTransforms: [constraintDirective()]
});

module.exports.schema = schema;