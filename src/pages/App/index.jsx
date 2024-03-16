import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Dashboard } from '@/pages/dashboard'
import { MainContent } from '@/components/MainContent'
import { Sinteticos } from '@/pages/Sinteticos'
import { Binarias } from '@/pages/Binarias'
import { Forex } from '@/pages/Forex'
import { Settings } from '@/pages/Settings'
import { Help } from '@/pages/Help'
import './App.css'

function AppMain(){
  let routs = useRoutes([
    {
      path:'/Dashboard',
      element: <Dashboard/>
    },
    {
      path:'/Indices Sinteticos',
      element: <Sinteticos/>
    },
    {
      path:'/Binarias',
      element: <Binarias/>
    },
    {
      path:'/Forex',
      element: <Forex/>
    },
    {
      path:'/Settings',
      element: <Settings/>
    },
    {
      path:'/Help',
      element: <Help/>
    }
  ])

  return(routs)
}

function App() {

  return (
    <>
      <BrowserRouter>
          <MainContent/>
      </BrowserRouter>
    </>
  )
}

export default App
export { AppMain }
