const counterReducer = (state,action) =>{
    console.log(state,action);
  if(action.type==='increment'){
    return state+1;
  }
  if(action.type==='decrement'){
    return state-1;
  }
  return state;
  }
  
  export {counterReducer}