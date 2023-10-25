import { Title } from "./Book/Title"
import { Author } from "./Book/Author";
import { BookInfo } from "./Book/BookInfo";
import { CoverImage } from "./Book/CoverImage";

export const Book = ({book}) => {
    const {image,title,author,year,genre,rating,description} = book
  return (
    
    <div>
        <CoverImage coverImage={image}/>
       
        <Title bookTitle = {title} />
        <Author authorName={author} />
        <BookInfo year={year} genre={genre} rating={rating} description={description}  />
        
    </div>
   
  )
}

