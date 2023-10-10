import Header from '../components/Header'
import { useEffect, useState } from 'react'
// import Main from '../components/Main'
import Map from '../components/Map'
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Footer from '../components/Footer'
import './Cantact.css'


const Contact = () => {
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
  function click(e) {
    window.location = '/'
  }
  return (
    <>
      <Header />
      {/* <Main pageName="Contact Page" designer="JS Designer"/> */}
      <section className='contactCards'>
        <div className='contactCard'>
          <PlaceIcon className='iconsContact' style={{ fontSize: 60 }} />
          <div>
            <h3 style={{ marginTop: '10px' }}>ADRESSE</h3>
            <p style={{ marginTop: '5px' }}>Imm Achifaa,4eme Etage, bd kinidy, en face l'hopital mohamed V, Safi, Maroc</p>
          </div>
        </div>
        <div className='contactCard'>
          <EmailIcon className='iconsContact' style={{ fontSize: 60 }} />
          <div>
            <h3 style={{ marginTop: '26px' }}>EMAIL</h3>
            <p style={{ marginTop: '5px' }}>Abderrahimlouridi@gmail.com</p>
          </div>
        </div>
        <div className='contactCard'>
          <LocalPhoneIcon className='iconsContact' style={{ fontSize: 60 }} />
          <div>
            <h3 style={{ marginTop: '28px', marginLeft: '35px' }}>TELEPHONE</h3>
            <p style={{ marginTop: '5px', marginLeft: '20px' }}> 0524461417 / 0678572247</p>
          </div>
        </div>
      </section>

      <section className='contactParent'>
        <div className='cantactInbox'>
          <div style={{
            color: 'black', fontSize: '25px',
            fontWeight: 'bold', marginTop: '20px',
            marginLeft: '30px'
          }}>
            Contactez-Nous
            <p style={{ border: '2px solid #00a3c8', marginTop: '10px', width: '230px' }}></p>
          </div>
          <div className='textfieldParent'>
            <div className="textfield"><TextField style={{ width: '500px' }} id="name" label="Non et Prenom" /></div>
            <div className="textfield"><TextField style={{ width: '500px' }} id="email" label="Adresse mail" /></div>
            <div className="textfield"><TextField style={{ width: '500px' }} id="telephone" label="Telephone" /></div>
            <div className="textfield"><TextField style={{ width: '500px' }} id="message" label="Message" /></div>
            {/* <div className="textfield"><TextField id="password" label="Password" value={data.password} onChange={(e) => { handle(e) }} /></div> */}
            {/* <div className="textfield"><TextField id="birthdate" label="BirthDate" value={data.birthdate} onChange={(e) => { handle(e) }}/></div> */}
          </div>
          <Stack direction="row" spacing={2}>
            <Button style={{ marginTop: '20px', marginLeft: '30px' }}
              onClick={(e) => click(e)}
              variant="contained" endIcon={<SendIcon />}>
              Envoyer
            </Button>
          </Stack>

        </div>
        <div className='cantactMap'>
          <Map />
        </div>
      </section>
      <div>
        {toTopButton && (
          <ArrowUpwardIcon
            style={{
              backgroundColor: '#00a3c8',
              // backgroundColor: '#145356',
              position: 'fixed',
              bottom: '80px',
              right: '50px',
              height: '50px',
              width: '50px',
              fontSize: '50px',
              borderRadius: '50px',
              padding: '9px'
            }}
            onClick={scrollUp}
          />
        )}
      </div>
      <Footer />
    </>
  )
}



export default Contact