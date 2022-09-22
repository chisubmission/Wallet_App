
const BalanceReducer = (state = [], action) => {

  switch(action.type){
    case 'Show_Balance': {
      return [...state, action.payload]
    }
        
    default : return state
  }
}

export default BalanceReducer;