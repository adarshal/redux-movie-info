import React from 'react'
import { addFavourite, removeFromFav } from '../actions';


class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
  };
  handleUnFavClick = () => {
    const { movie,isFavourite } = this.props;
    this.props.dispatch(removeFromFav(movie));
  };
  render(){
    const {movie} =this.props;
  return (
    <div className='movie-card'>
      <div className='left'>
        <img alt='movie poster' src={movie.Poster} />
      </div>
      <div className='right'>
        
        <div className='title'>{movie.Title}</div>
        <div className='plot'>{movie.Plot}</div>
        <div className='footer'>
            <div className='rating'>{movie.imdbRating} </div>
            {
              this.props.isFavourite ?
              <button className='unfavourite-btn' onClick={this.handleUnFavClick}> unfav </button>
              :
              <button className='favourite-btn' onClick={this.handleFavouriteClick}> Add to fav </button>
            }
            
        </div>
      </div>
    </div>
  )
}
}

export default MovieCard
