import * as typesTodo from './types'

function reducer (state, actions) {
  switch (actions.type) {
    case typesTodo.TODO_ADD:
      console.log(state)
      return state.concat({
        id: new Date().getTime(),
        todo: actions.payload.todo,
        done: actions.payload.done
      })

    default:
      throw new Error('Ocorreu algum erro')
  }
}

export default reducer
