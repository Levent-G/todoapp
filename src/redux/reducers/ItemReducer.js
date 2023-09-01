const initialState  = {
    items: [],
    
  };

  const ItemReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return { ...state, items: [...state.items, action.payload] };
        
        case "DELETE_ITEM":
          const index = state.items.findIndex(
            (item) => item.id === action.payload.id
          );
          const newItems = [...state.items];
          if (index >= 0) {
            newItems.splice(index, 1);
          }
          return {
            ...state,
            items: newItems,
           
          };
      default:
        return state;
    }
  };
  export default ItemReducer;