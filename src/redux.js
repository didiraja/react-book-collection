// STORE
import { createStore } from 'redux'

const store = createStore(rootReducer)

export default store

// REDUCER
const initialState = {
  books: [
    {
      name: "Naruto",
      author: "Masashi Kishimoto",
    }
  ]
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_BOOK) {
    return Object.assign({}, state, {
      books: state.books.concat(action.payload)
    })
  }

  return state
}

export { rootReducer }

// ACTION
const ADD_BOOK = 'ADD_BOOK'

export function addBook (payload) {
  return { type: ADD_BOOK, payload }
}

window.store = store
window.addBook = addBook