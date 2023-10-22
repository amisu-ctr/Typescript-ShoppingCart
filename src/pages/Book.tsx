import { useParams, useOutletContext } from 'react-router-dom';

type obj = {
  hello: string;
};

function Book() {
  const { id } = useParams();
  const obj: obj = useOutletContext();

  return (
    <h1>
      Book {id} {obj.hello}
    </h1>
  );
}
export default Book;
