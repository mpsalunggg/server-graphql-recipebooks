import { recipes } from '../db'
import { Recipe } from '../types'

export const resolvers = {
  Query: {
    recipes: (): Recipe[] => recipes,
    recipe: (_: unknown, args: { id: string }): Recipe | undefined =>
      recipes.find((recipe) => recipe.id === args.id),
  },
  Mutation: {
    toggleFavorite: (_: unknown, args: { id: string }): Recipe | undefined => {
      const recipe = recipes.find((recipe) => recipe.id === args.id)
      if (!recipe) {
        throw new Error('Recipe not found')
      }
      recipe.isFavorite = !recipe.isFavorite
      return recipe
    },
    addRecipe: (
      _: unknown,
      args: {
        title: string
        description: string
        img: string
        ingredients: string[]
        instructions: string
      }
    ): Recipe => {
      if (
        !args.title ||
        !args.description ||
        !args.img ||
        !args.ingredients.length ||
        !args.instructions
      ) {
        throw new Error('All fields are required')
      }
      const newRecipe: Recipe = {
        id: (recipes.length + 1).toString(),
        title: args.title,
        description: args.description,
        img: args.img,
        ingredients: args.ingredients,
        instructions: args.instructions,
        isFavorite: false,
      }
      recipes.push(newRecipe)
      return newRecipe
    },
    deleteRecipe: (_: unknown, args: { id: string }): Recipe | undefined => {
      const index = recipes.findIndex((recipe) => recipe.id === args.id)
      if (index === -1) {
        throw new Error('Recipe not found')
      }
      const deletedRecipe = recipes.splice(index, 1)[0]
      return deletedRecipe
    },
    editRecipe: (
      _: unknown,
      args: {
        id: string
        title?: string
        description?: string
        img?: string
        ingredients?: string[]
        instructions?: string
      }
    ): Recipe | undefined => {
      const recipe = recipes.find((recipe) => recipe.id === args.id)
      if (!recipe) {
        throw new Error('Recipe not found')
      }
      if (args.title !== undefined) recipe.title = args.title
      if (args.description !== undefined) recipe.description = args.description
      if (args.img !== undefined) recipe.img = args.img
      if (args.ingredients !== undefined) recipe.ingredients = args.ingredients
      if (args.instructions !== undefined)
        recipe.instructions = args.instructions
      return recipe
    },
  },
}
