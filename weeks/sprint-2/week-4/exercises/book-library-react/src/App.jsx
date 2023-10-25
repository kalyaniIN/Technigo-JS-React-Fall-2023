import "./App.css";
import data from "./data.json";
import { Book } from "./Book";

function App() {
  const { books } = data;
  console.log(books);

  return (
    <>
      <div>
        {books.map((book) => (
          <Book key={book.title} book={book} />
        ))}
      </div>
    </>
  );
}

export default App;
