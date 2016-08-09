//a reducer takes in two things:

// 1. The action (info about what happened)
// 2. a copy of current state


export default function posts(state=[], action) {
  switch(action.type){
    case 'INCREMENT_LIKES' :
      console.log("incrementing likes!!");
      const i = action.index
      return [
        ...state.slice(0,i), //up to b4 the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1) //after the one we are updtaing
      ]
    default:
      return state;
  }
}