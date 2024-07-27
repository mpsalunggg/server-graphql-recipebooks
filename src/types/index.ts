export type Recipe = {
  id: string
  title: string
  description?: string
  img?: string
  ingredients: string[]
  instructions: string
  isFavorite: boolean
}
