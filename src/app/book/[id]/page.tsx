import { books } from "@/app/data/booksData"; // Убедитесь, что путь правильный

type Props = {
  params: {
    id: string;
  };
};

export default function BookPage({ params: { id } }: Props) {
  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return <p>Книга не найдена</p>;
  }

  return (
    <div className="container mx-auto my-16 flex">
      <div>
        {" "}
        <img src={book.img.src} alt={book.name} width={300} height={400} />
      </div>{" "}
      <div className="w-[960px] ml-6 mt-2">
        <h1 className="text-[32px] font-bold mb-8">{book.name}</h1>
        <p className="my-4">
          Автор: <span className="font-bold">{book.author}</span>
        </p>
        <p className="my-2">{book.title}</p>
        <p className="my-4">Количество страниц: <span className="font-bold"> {book.pages}</span></p>
      </div>
    </div>
  );
}
