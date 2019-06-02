// STORE
import { createStore } from "redux"

export function reducer() {
  return [
    {
      id: 1,
      name: "Naruto",
      author: "Masashi Kishimoto",
    }
  ] 
}

export const store = createStore(reducer)

// ACTIONS
export const ADD_BOOK = "ADD_BOOK";

let id = 1

export const addBook = (obj) => ({
  type: ADD_BOOK,
  id: id++,
  obj
});