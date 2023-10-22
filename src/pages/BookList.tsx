import { Link, useOutletContext } from 'react-router-dom';
import { BookLayout } from '../BookLayout';

function BookList() {
  const obj = useOutletContext();
  return (
    <>
      <h1>BookList {obj.hello}</h1>
      {/* <Link to="/books/1">Book 1</Link> <br />
      <Link to="/books/2">Book 2</Link> <br />
      <Link to="/books/new">New Book</Link> */}
    </>
  );
}
export default BookList;
