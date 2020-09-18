const defalutState = 0;

interface action {
  type: string;
  playload: any;
}

const reducer = (state = defalutState, action: action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.playload;
  }
}

// const state = reducer(1, {
//   type: 'ADD',
//   playload: 2
// })

export default reducer