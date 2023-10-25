export const BookInfo =({genre,year,rating,description}) => {
    
    return (
      <div>Book Info:
        <h3>Genre: {genre}</h3>
        <h3>Year:{year}</h3>
        <h3>Rating:{rating}</h3>
        <h3>Description:{description}</h3>
        
        </div>
    )
  }