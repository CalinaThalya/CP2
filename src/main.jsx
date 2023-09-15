import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'


import Home from './routes/Home/Home.jsx'
import Error from './routes/Error/Error.jsx'
import EditarProdutos from './routes/EditarProdutos/EditarProduto.jsx'
import Produtos from './routes/Produtos/Produtos.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdicionarProtudo from './routes/AdicionarProduto/AdicionarProduto.jsx'

const route = createBrowserRouter([
    {
      path:'/',
      element: <App/>,
      errorElement: <Error/>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/produtos',
          element: <Produtos/>
        },
        {
          path:'/editar/produtos/:id',
          element: <EditarProdutos/>
        },
        {
          path:'/adicionar/produtos',
          element: <AdicionarProtudo/>
        }
      ]

    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {route}/>
  </React.StrictMode>,
)
