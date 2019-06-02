// STORE
import { createStore } from "redux"

const INITIAL_STATE = [
  {
    id: 1,
    name: "Naruto",
    author: "Masashi Kishimoto",
  },
  {
    id: 2,
    name: "Saint Seiya",
    author: "Masami Kurumada",
  }
] 

export function reducer(state = INITIAL_STATE, action) {
  
  if (action.type == 'ADD_BOOK') {
    
    return [...state,
    {
      name: action.book.name,
      author: action.book.author,
    }]
  }

  return state

}

export const store = createStore(reducer)

// ACTION
export function addBook(bookObj) {
  return {
    type: 'ADD_BOOK',
    book: bookObj
  }
}
