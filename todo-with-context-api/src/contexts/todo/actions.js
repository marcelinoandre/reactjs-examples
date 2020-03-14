import * as typesTodo from './types'

export function todoAdd (todo, done) {
  return {
    type: typesTodo.TODO_ADD,
    payload: {
      todo,
      done
    }
  }
}
