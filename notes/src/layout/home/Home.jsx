import './home.module.css'
import { useSeparator } from '@utils/separator'

export default function Home() {
  const styles = useSeparator({
    color: {
      xs: 'red',
      sm: 'blue',
      lg: 'green'
    },
    border: {
      lg: '1px solid green',
      xl: '1px solid blue'
    }
  })

  console.log(styles)

  return (
    <div>
      <div style={styles}>test</div>
      <h2>FrontEnd Learn... </h2>
    </div>
  )
}
