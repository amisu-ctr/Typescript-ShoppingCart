import { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/', { state: 'error page not found' });
    }, 100);
  }, []);

  return <h1>NotFound</h1>;
  // return <Navigate to="/" />;
}
export default NotFound;

//passing in -1 will navigate backwards to the previous page
// -2 will navigate backwards 2 steps backwards
