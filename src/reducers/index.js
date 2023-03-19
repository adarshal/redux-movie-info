import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAV, SHOW_FAV } from '../actions/index';

const initialMovieState = {
  list: [],
  favourites: [],
  showFav: false,

};
export  function movies(state = initialMovieState, action) {
  // if(action.type===ADD_MOVIES){
  //         return {
  //             ...state,
  //             list:action.movies
  //         }
  // }
  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FROM_FAV:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    case SHOW_FAV:
        return {
          ...state,
          showFav: action.val,
        };
    default:
      return state;
  }
}
// if(action.type==='ADD_MOVIES/first'){
//   return [action.movies,...state];
// }return state
// }

// import { createSlice, configureStore } from '@reduxjs/toolkit'

// export   const counterSlice = createSlice({
//   name: 'ADD_MOVIES',
//   initialState: [],
//   reducers: {
//     first: state => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.push(actions)
//     },
//     decremented: state => {
//       state.value -= 1
//     }
//   }
// })

// export const { incremented, decremented } = counterSlice.actions
const initialSearchState={
  results:{}
}

export  function search(state=initialSearchState, action){
  return state;
}

const intialRootState={
  movies:initialMovieState,
  search:initialSearchState
}
export default function rootReducer(state=intialRootState,action){
  return{
    movies: movies(state.movies,action),
    search: search(state.search,action)
  }
}