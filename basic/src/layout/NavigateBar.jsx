import { Link } from 'react-router-dom'
import styles from './NavigateBar.module.css'

function Nav(props) {
  return <ul>{props.routes ? props.routes.map(item => <LinkItem key={item.path} route={item} />) : props.children}</ul>
}

function LinkItem(props) {
  return <li>{props.route.path ? <Link to={props.route.path}>{props.route.name}</Link> : props.route.name}</li>
}

const ComponentsList = (routes, baseUrl = '') => {
  let navItemList = []
  routes.forEach((route, index) => {
    const nextPath = baseUrl + (route.path || route.base)
    if (route.children && route.children.length > 0) {
      navItemList.push(<LinkItem key={nextPath} route={route.path ? { ...route, path: nextPath } : route} />)
      navItemList.push(<Nav key={baseUrl + 'base'}>{ComponentsList(route.children, nextPath)}</Nav>)
    } else {
      navItemList.push(<LinkItem key={index + nextPath} route={route.path ? { ...route, path: nextPath } : route} />)
    }
  })

  return navItemList
}

export default function NavigateBar(props) {
  const Components = ComponentsList(props.routes)
  
  return (
    <div className={styles.NavCon}>
      <div className={styles.logoCon}>
        {/* <h1><Link to="/">Home</Link></h1> */}
      </div>
      <div className={styles.NavigateBarCon}>
        <Nav>{Components}</Nav>
      </div>
    </div>
  )
}
