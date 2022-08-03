import { Routes, Route, Link } from 'react-router-dom'
import NavigateBar from './NavigateBar'
import routes from '../routes/routes'
import flatRoutes from '../utils/flatRoutes'
import styles from './Layout.module.css'
import Home from './Home'

export default function Layout(props) {
  const routesList = flatRoutes(routes).filter(route => route.path)
  return (
    <div className={styles['app-con']}>
      <NavigateBar routes={routes} />
      <div className={styles['main-con']}>
        <div className={styles['main-header']}></div>
        <div className={styles['routes-con']}>
          <Routes>
            {routesList.map(route => (
              <Route key={'route' + route.path} path={route.path} element={route.element} />
            ))}
            <Route key="route-home" path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
