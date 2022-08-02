import { Routes, Route, Link } from 'react-router-dom'
import NavigateBar from './NavigateBar'
import routes, { flatRoutes } from '../utils/routes'
import styles from './Layout.module.css'

export default function Layout(props) {
  const routesList = flatRoutes(routes).filter(route => route.path)
  return (
    <div className={styles.appCon}>
      <NavigateBar routes={routes} />
      <div className={styles.mainCon}>
        <Routes>
          {routesList.map(route => {
            route.path
            return <Route path={route.path} element={route.element} />
          })}
        </Routes>
      </div>
    </div>
  )
}
