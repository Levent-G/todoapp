export const AddItemAction =(item) => {
    return (dispatch) =>{
        dispatch({type:"ADD_ITEM",payload:item});
    }
}

export const deleteItem = (body) => {
    return {
      type: "DELETE_ITEM",
      payload: body,
    };
  };