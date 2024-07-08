export const typeDefs = `#graphql
  type Recipe {
    id: ID!
    title: String!
    img: String!
    ingredients: [String!]!
    instructions: String!
    isFavorite: Boolean!
  }

  type Query {
    recipes: [Recipe!]!
    recipe(id: ID!): Recipe
  }

  type Mutation {
    toggleFavorite(id: ID!): Recipe
    addRecipe(
      title: String!
      img: String!
      ingredients: [String!]!
      instructions: String!
    ): Recipe
    deleteRecipe(id: ID!): Recipe
    editRecipe(
      id: ID!
      title: String
      img: String
      ingredients: [String!]
      instructions: String
    ): Recipe
  }
`
