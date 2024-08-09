import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { Buy } from './pages/Buy/Buy';


const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/buy",
    element: <Buy />,
  },
])

export const Context = React.createContext();

function Main() {

  const [language, setLanguage] = useState('english');

  return (
    <Context.Provider value={[language, setLanguage]}>
      <RouterProvider router={router} />
    </Context.Provider>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
)