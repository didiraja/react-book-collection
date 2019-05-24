// STORE
import { createStore } from 'redux'

function reducer() {
  return [
    {
      name: "Naruto",
      author: "Masashi Kishimoto",
    },
  ]
}

const store = createStore(reducer)

export default store

