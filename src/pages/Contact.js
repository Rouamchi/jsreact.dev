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
      <section className='contactCards'>
        <div className='contactCard'>
          <PlaceIcon className='iconsContact' style={{ fontSize: 60 }} />
          <div>
            <h3 style={{ marginTop: '10px' }}>ADRESSE</h3>
            <p style={{ marginTop: '5px' }}>LOT ZAITOUNE N°38 JNANE ILLANE, SAFI, MAROC</p>
          </div>
        </div>
        <div className='contactCard'>
          <EmailIcon className='iconsContact' style={{ fontSize: 60 }} />
          <div>
            <h3 style={{ marginTop: '26px' }}>EMAIL</h3>
            <p style={{ marginTop: '5px' }}>Daflowess.group@gmail.com</p>
          </div>
        </div>
        <div className='contactCard'>
          <LocalPhoneIcon className='iconsContact' style={{ fontSize: 60 }} />
          <div>
            <h3 style={{ marginTop: '28px', marginLeft: '35px' }}>TELEPHONE</h3>
            <p style={{ marginTop: '5px', marginLeft: '20px' }}> 0524464633 / 0602790203</p>
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
          </div>
          {/* For-Mobile */}
          <div className='textfieldParentMobile'>
            <div className="textfield"><TextField style={{ width: '98%' }} id="name" label="Non et Prenom" /></div>
            <div className="textfield"><TextField style={{ width: '98%' }} id="email" label="Adresse mail" /></div>
            <div className="textfield"><TextField style={{ width: '98%' }} id="telephone" label="Telephone" /></div>
            <div className="textfield"><TextField style={{ width: '98%' }} id="message" label="Message" /></div>
          </div>
          <Stack direction="row" spacing={2}>
            <Button style={{ marginTop: '20px', marginLeft: '30px' }}
              onClick={(e) => click(e)}
              variant="contained" endIcon={<SendIcon />}>
              Envoyer
            </Button>
          </Stack>

        </div>
        {/* <div className='cantactMap'>
          <Map />
        </div> */}
      </section>

      <section className='contactCardsMobile'>
        <div className='contactCard'>
          <EmailIcon className='iconsContact' style={{ fontSize: 40, marginTop:'3.5%' }} />
          <div>
            <h3 style={{ marginTop: '4%' }}>EMAIL</h3>
            <p style={{ marginTop: '2%', marginBottom:'3%' }}>Daflowess.group@gmail.com</p>
          </div>
        </div>
        <div className='contactCard'>
          <LocalPhoneIcon className='iconsContact' style={{ fontSize: 40, marginTop:'3.5%' }} />
          <div>
            <h3 style={{ marginTop: '6%', marginLeft: '5%' }}>TELEPHONE</h3>
            <p style={{ marginTop: '4%', marginLeft: '2%', fontSize:'18px', marginBottom:'3%'}}> +212602790203</p>
          </div>
        </div>
        <div className='contactCard'>
          <PlaceIcon className='iconsContact' style={{ fontSize:40, marginTop:'8%'}} />
          <div>
            <h3 style={{ marginTop: '3%' }}>ADRESSE</h3>
            <p style={{ marginTop: '1%', width:'99%', fontSize:'16px', marginBottom:'3%'}}>Lot Zaitoune N°38 Jnane Illane, Safi, Maroc</p>
          </div>
        </div>
      </section>
      <div>
        {toTopButton && (
          <ArrowUpwardIcon
            style={{
              backgroundColor: '#00a3c8',
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
      <div className='cantactMap'>
          <Map />
        </div>
      <Footer />
    </>
  )
}



export default Contact