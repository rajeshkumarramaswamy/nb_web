export const ItemsActions = (items) => {
    return (dispatch, getState) => {
      // make async call to database
      dispatch({ type: 'CREATE_ITEM', items });
    }
  };