import Image, { StaticImageData } from "next/image";
import RatingIcon from "../icons/Rating";
import HeadponesIcon from "../icons/Headpones";
import React from "react";

interface BookCardProps {
  img: StaticImageData;
  name: string;
  author: string;
}

const BookCard: React.FC<BookCardProps> = ({ img, name, author }) => {
  return (
    <div className="w-[240px]">
      <Image
        className="rounded-2xl mb-5"
        src={img}
        alt={name}
        width={240}
        height={335}
      />
      <div className="mb-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-600">Автор: {author}</p>
      </div>
      <div className="flex justify-between mr-2">
        <RatingIcon />
        <HeadponesIcon/>
      </div>
    </div>
  );
};

export default BookCard;
