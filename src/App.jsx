import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home';
import { SearchPage } from './components/SearchPage';
import { ErrorPage } from './components/ErrorPage';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: '/search',
      element: <SearchPage />
    },
  ]);

  return (
    <RouterProvider router={routes} />
  )
}

export default App
