import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Products from './Pages/Products.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: 'product/:id',
        element: <SingleProduct/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
