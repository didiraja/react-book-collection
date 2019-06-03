// STORE
import { createStore } from "redux"

const INITIAL_STATE = [
  {
    id: 1,
    name: "Sapiens",
    author: "Yuval Harari",
  },
  {
    id: 2,
    name: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
  }
] 

export function reducer(state = INITIAL_STATE, action) {
  
  if (action.type === 'ADD_BOOK') {
    
    return [...state,
    {
      name: action.book.name,
      author: action.book.author,
    }]
  }

  return state

}

export const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// ACTION
export function addBook(bookObj) {
  return {
    type: 'ADD_BOOK',
    book: bookObj
  }
}
