
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './pages/Login';
import Cadastro from './pages/Cadastro'
import Consulta from './pages/Consulta'
import Menu from './pages/Menu';

import { GlobalCss } from './styles';
import CadastroUser from './pages/CadastroUser';

const Rotas = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/cadastro',
      element: <Cadastro />
    },
    {
      path: '/consulta',
      element: <Consulta />
    },
    {
      path: '/menu',
      element: <Menu />
    },
    {
      path: '/usercadastro',
      element: <CadastroUser />
    }
])

function App() {

        return (
          <>
          <GlobalCss />
          <RouterProvider router={Rotas}/>
          </>
        )
}

export default App;