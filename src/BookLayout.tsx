import { Link, NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export function BookLayout() {
  const [number, setNumber] = useState(3);
  //searchParams can be used like useState
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const num = searchParams.get('n');

  return (
    <>
      <NavLink
        to="/books/1"
        style={({ isActive }) => {
          //isActive property is available on NavLink element
          return isActive ? { color: 'red' } : {};
        }}
      >
        {({ isActive }) => {
          return isActive ? 'Active Book' : 'Book';
        }}
      </NavLink>
      <br />
      <Link to="/books/2">Book 2</Link> <br />
      <Link to={`/books/${number}`}>Book {number}</Link> <br />
      <Link to="/books/new">searchParams New book {num}</Link>
      <Outlet context={{ hello: 'world' }} />
      <span>State input</span>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />{' '}
      <hr />
      <span>Searchparams input</span>
      <input
        type="number"
        value={num}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
}

//NavLink has properties like isActive on it unlike Link
