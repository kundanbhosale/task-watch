import { Fragment } from 'react'
import HomeScreen from 'src/screens/home'

const Home = () => {
  return (
    <Fragment>
      <HomeScreen />
    </Fragment>
  )
}

export async function getStaticProps() {
  return { props: {} }
}

export default Home
