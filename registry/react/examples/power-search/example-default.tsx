"use client";

import { BookIcon, CalendarIcon, HashIcon, TypeIcon } from "lucide-react";
import { useState } from "react";
import {
  PowerSearch,
  type PowerSearchFilter,
  usePowerSearchConfig,
} from "@/registry/react/components/power-search";

const genreValues = [
  { value: "sci-fi", label: "Science Fiction" },
  { value: "fantasy", label: "Fantasy" },
  { value: "non-fiction", label: "Non-Fiction" },
  { value: "romance", label: "Romance" },
  { value: "mystery", label: "Mystery" },
];

const mockData = [
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    genre: "sci-fi",
    published_date: "1965-08-01",
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "fantasy",
    published_date: "1937-09-21",
  },
  {
    id: 3,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    year: 2011,
    genre: "non-fiction",
    published_date: "2011-09-04",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "romance",
    published_date: "1813-01-28",
  },
  {
    id: 5,
    title: "And Then There Were None",
    author: "Agatha Christie",
    year: 1939,
    genre: "mystery",
    published_date: "1939-11-06",
  },
];

export default function Example() {
  const config = usePowerSearchConfig([
    {
      key: "title",
      type: "string",
      label: "Title",
      icon: <TypeIcon size={16} />,
    },
    {
      key: "author",
      type: "string",
      label: "Author",
      icon: <TypeIcon size={16} />,
    },
    {
      key: "year",
      type: "number",
      label: "Publication Year",
      icon: <HashIcon size={16} />,
    },
    {
      key: "genre",
      type: "enum_list",
      label: "Genre",
      items: genreValues,
      icon: <BookIcon size={16} />,
    },
    {
      key: "published_date",
      type: "date",
      label: "Published Date",
      icon: <CalendarIcon size={16} />,
    },
  ]);

  const [filters, setFilters] = useState<readonly PowerSearchFilter[]>([]);

  const filteredData = config.applyFilters(mockData, filters);

  return (
    <div className="flex w-full flex-col gap-4">
      <PowerSearch
        config={config}
        filters={filters}
        onChange={setFilters}
        placeholder="Search books..."
        resultCount={filteredData.length}
      />

      <div className="rounded-md border">
        <div className="grid grid-cols-5 border-b bg-muted/50 p-3 font-semibold text-sm">
          <div>Title</div>
          <div>Author</div>
          <div>Year</div>
          <div>Genre</div>
          <div>Published</div>
        </div>
        <div className="flex flex-col">
          {filteredData.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground text-sm">
              No results found.
            </div>
          ) : (
            filteredData.map((book) => (
              <div
                className="grid grid-cols-5 border-b p-3 text-sm last:border-0"
                key={book.id}
              >
                <div className="font-medium">{book.title}</div>
                <div className="text-muted-foreground">{book.author}</div>
                <div>{book.year}</div>
                <div>
                  {genreValues.find((g) => g.value === book.genre)?.label ||
                    book.genre}
                </div>
                <div>{book.published_date}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
