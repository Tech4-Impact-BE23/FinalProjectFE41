const initialState = {
    categories: [],
  };
  
  const CategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CATEGORIES':
        return {
          ...state,
          categories: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default CategoriesReducer;