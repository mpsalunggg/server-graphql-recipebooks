import { Recipe } from '../types'

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Pancakes',
    img: 'https://img.freepik.com/premium-photo/stack-pancakes-with-butter-syrup-top_81048-20101.jpg',
    ingredients: ['Flour', 'Milk', 'Eggs'],
    instructions: 'Mix and fry',
    isFavorite: false,
  },
  {
    id: '2',
    title: 'Salad',
    img: 'https://img.freepik.com/free-photo/salad-from-tomatoes-cucumber-red-onions-lettuce-leaves-healthy-summer-vitamin-menu-vegan-vegetable-food-vegetarian-dinner-table-top-view-flat-lay_2829-6482.jpg',
    ingredients: ['Lettuce', 'Tomato', 'Cucumber'],
    instructions: 'Mix and serve',
    isFavorite: false,
  },
]
