import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import useAuthStore from './store/authStore'
import { useEffect } from 'react'

const App = () => {
  const checkAuth = useAuthStore((state) => state.checkAuth)

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
