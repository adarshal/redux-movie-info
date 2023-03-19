import React from 'react';

import MovieCard from './MovieCard';
import Navbar from './Navbar';

import { data } from '../data';
import { addMovies,removeFromFav, setShowFav } from '../actions';


class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log('updated');
      this.forceUpdate();
    });
    //make api call
    //dispatch action
    //   store.dispatch({
    //     type:'ADD_MOVIES',
    // movies:[{name:'Superman'}]
    //   });
    store.dispatch(addMovies(data));

    console.log('after state', this.props.store.getState());
  }
  isMovieFav = (movie) => {
    const { movies } = this.props.store.getState();
    console.log('check mov fav',movies.favourites )
    const index=movies.favourites.indexOf(movie);
    if(index!== -1){
      return true;
    }else{
      return false;
    }
  };
  onChangeTab=(val)=>{
    this.props.store.dispatch(setShowFav(val));
  }

  render() {
    console.log('render');
    const{movies}=this.props.store.getState(); //{getstate looks like: movies:{}, search:{}}
    const { list ,favourites, showFav} = movies; //{list:[], favorites}
    console.log('im' ,this.props.store.getState());
    const displayMovies= showFav? favourites:list;
    console.log('lll',displayMovies,'--',favourites,'---',list);
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFav ? "" : "active-tabs"}`} onClick={()=> this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFav ? "active-tabs" : ""}`} onClick={()=> this.onChangeTab(true)} >Fav</div>
          </div>

          <div className="list">
          
            {displayMovies?.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFav(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No movies to display!! </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
