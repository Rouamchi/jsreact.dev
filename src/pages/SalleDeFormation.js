import React from 'react'
import Header from '../components/Header'
import Galerie from '../components/Galerie'
import { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import Footer from '../components/Footer'

const SalleDeFormation = () => {
  const [toTopButton, setToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setToTopButton(true)
      } else {
        setToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <>
      <Header />
      <Galerie />
      <div>
      {toTopButton && (
        <ArrowUpwardIcon
          style={{
            backgroundColor: '#062a78',
            // backgroundColor: '#145356',
            position: 'fixed',
            bottom: '80px',
            right: '50px',
            height: '50px',
            width: '50px',
            fontSize: '50px',
            borderRadius:'50px',
            padding:'9px'
          }}
          onClick={scrollUp}
        />
      )}
    </div>
      <Footer />
    </>
  )
}

export default SalleDeFormation