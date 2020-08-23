const { makeExecutableSchema } = require('graphql-tools');
const { constraintDirective, constraintDirectiveTypeDefs } = require('graphql-constraint-directive');

const typeDefs = ` 

type Servicio {
    _id: ID!
    Title: String!
    Description: String!
    fechaCreacion: String!
    updateDate: String
}

type User {
    _id: ID!
    Username: String!
    Password: String!
    FirstName: String!
    LastName: String!
    fechaCreacion: String!
    Rol: String!
    updateDate: String
},

type AuthData {
    UserID: String!
    Username: String!
    Rol: String!
    Token: String!
    TokenSpiration: Int!
}

input userInput {
    Username: String!   @constraint(pattern: "^[0-9a-zA-Z]*$", minLength: 5, maxLength: 50)
    Password: String!   @constraint(pattern: "^[0-9a-zA-Z]*$", minLength: 5, maxLength: 15)
    FirstName: String!  @constraint(minLength: 5, maxLength: 50)
    LastName: String!   @constraint(minLength: 5, maxLength: 50)
    Rol: String!        @constraint(minLength: 5, maxLength: 50)
}

input updateInput {
    _id: ID!
    Username: String!   @constraint(pattern: "^[0-9a-zA-Z]*$", minLength: 5, maxLength: 50)
    FirstName: String!  @constraint(minLength: 5, maxLength: 50)
    LastName: String!   @constraint(minLength: 5, maxLength: 50)
    Rol: String!        @constraint(minLength: 5, maxLength: 50)
}

input loginInput {
    Username: String!   @constraint(pattern: "^[0-9a-zA-Z]*$", minLength: 5, maxLength: 50)
    Password: String!   @constraint(pattern: "^[0-9a-zA-Z]*$", minLength: 5, maxLength: 15)
}

input registerInput {
    Username: String!   @constraint(pattern: "^[0-9a-zA-Z]*$", minLength: 5, maxLength: 50)
    FirstName: String!  @constraint(minLength: 5, maxLength: 50)
    LastName: String!   @constraint(minLength: 5, maxLength: 50)
    Password: String!   @constraint(minLength: 5, maxLength: 15)
}

input createServicioInput {
    Title: String!          @constraint(minLength: 5, maxLength: 50)
    Description: String!    @constraint(minLength: 5, maxLength: 255)
}

input updateServicioInput {
    _id: ID!
    Title: String!          @constraint(minLength: 5, maxLength: 50)
    Description: String!    @constraint(minLength: 5, maxLength: 255)
}

type RootQuery {
    usuarios: [User!]!
    login(loginInput: loginInput): AuthData!
    servicios: [Servicio!]!
}

type RootMutation {
    registrarUser(userInput: userInput): User!
    eliminarUser(_id: String!): Boolean!
    updateUser(updateInput: updateInput): Boolean!
    register(registerInput: registerInput): User!
    createServicio(createServicioInput: createServicioInput): Servicio!
    updateServicio(updateServicioInput: updateServicioInput): Boolean!
    deleteServicio(_id: ID!): Boolean!
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