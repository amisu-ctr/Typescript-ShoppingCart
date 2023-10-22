import { Routes, Route, useRoutes, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';
import NotFound from './pages/NotFound';
// import Book from './pages/Book';
// import BookList from './pages/BookList';
// import NewBook from './pages/NewBook';

import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { BookLayout } from './BookLayout';
import { BookRoutes } from './BookRoutes';

function App() {
  // let element = useRoutes([
  //   {
  //     path: '/',
  //     element: <Home />,
  //   },
  //   {
  //     path: '*',
  //     element: <NotFound />,
  //   },
  // ]);
  const location = useLocation();
  console.log(location);

  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/books" element={<h1>Extra Content</h1>} />
      </Routes>
      <Navbar />
      {location.state}
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          {/**Below was to learn about routing */}
          <Route path="/books/*" element={<BookRoutes />} />

          {/* <Route path="/books" element={<BookLayout />}>
            <Route index element={<BookList />} />
            <Route path=":id" element={<Book />} />
            <Route path="new" element={<NewBook />} />
          </Route> */}

          {/* <Route path="/books/" element={<BookList />} />
          <Route path="/books/:id" element={<Book />} /> {/**dynamic routing */}
          {/* <Route path="/books/new" element={<NewBook />}></Route>{' '} */}
          {/**routing
          priority */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;

/**
 * A * will match anything at all which makes it perfect for things like a 404 page.
 * A route that contains a * will also be less specific
 * than anything else so you will never accidentally match a * route when another route would have also matched.
 */
