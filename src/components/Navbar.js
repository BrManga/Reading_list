import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>My Reading List</h1>
      {books.length !== 0 ? (
        <p>Currently you have {books.length} books to get through</p>
      ) : null}
    </div>
  );
};

export default Navbar;
