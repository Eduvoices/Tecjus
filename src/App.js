
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './pages/Login';
import Cadastro from './pages/Cadastro'
import Consulta from './pages/Consulta'
import Menu from './pages/Menu';

import { GlobalCss } from './styles';
import CadastroUser from './pages/CadastroUser';
import Recibos from './pages/Recibos';
import AlteraSenha from './pages/AlterarSenha';
import Agenda from './pages/Agenda';

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
    },
    {
      path: '/recibos',
      element: <Recibos />
    },
    {
      path: '/alterarsenha',
      element: <AlteraSenha />
    },
    {
      path: 'agenda',
      element: <Agenda />
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