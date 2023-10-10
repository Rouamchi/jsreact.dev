import Header from '../components/Header'
import Main from '../components/Main'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Main/>
      {/* <Main pageName="Home Page" designer="Full Designer"/> */}
      <ArrowUpwardIcon/>
      <Footer />
    </>
  )
}

export default Home