import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoytContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoytContainer>
      <Header />
      <Outlet />
    </LayoytContainer>
  )
}
