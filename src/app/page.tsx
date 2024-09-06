import Link from "next/link";
import BookCard from "./components/card";
import { books } from "./data/booksData";

export default function Home() {
  return (
    <div className="container mb-24">
      <h1 className="mt-16 text-[32px] font-semibold mb-8">Китоблар</h1>
      <div className="flex flex-wrap gap-5">
        {books.map((book) => (
          <Link key={book.id} href={`/book/${book.id}`}>
            <BookCard img={book.img} name={book.name} author={book.author} />
          </Link>
        ))}
      </div>
    </div>
  );
}
