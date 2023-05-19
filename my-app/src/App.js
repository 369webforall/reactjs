// component is function(JSX)
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Feature from './pages/Feature';
import Team from './pages/Team';
import Signin from './pages/Signin';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/team" element={<Team />} />
        <Route path="/signin" element={<Signin />} />
      </Route>
    )
  );
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default App;
