import Root from './components/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Basket from './pages/Basket';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Basket />,
        path: '/basket',
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
