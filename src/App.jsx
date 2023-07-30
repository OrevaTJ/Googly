import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home';
import { SearchPage } from './components/SearchPage';
import { ErrorPage } from './components/ErrorPage';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home input={input} setInput={setInput} />,
      errorElement: <ErrorPage />
    },
    {
      path: '/search',
      element: <SearchPage input={input} setInput={setInput} />
    },
  ]);

  return (
    <RouterProvider router={routes} />
  )
}

export default App
