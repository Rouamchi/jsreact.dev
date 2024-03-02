import './Footer.css'
import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import ReactWhatsapp from 'react-whatsapp'

const footer = () => {
  return (
    <>
      <div>
        <footer>
          <div className='address'>
            Adresse: LOT ZAITOUNE N°38 JNANE ILLANE, SAFI, MAROC
          </div>
          <div className='icons1'>
            <div><FaFacebook /><a href="https://www.facebook.com/profile.php?id=100092597575369" target='_blank' rel='noreferrer'> Darkaoui Advisory</a> </div>
            <div><FaWhatsapp /> <a href="." target='_blank' rel='noreferrer'><ReactWhatsapp className='whatsapp' number="+212602790203">+212602790203</ReactWhatsapp></a></div>
          </div>
          <div className='icons2'>
            <div><a href="https://mail.google.com/mail/u/0/?hl=fr#search/daflowess.group%40gmail.com?compose=new" target='_blank' rel='noreferrer'> <FaEnvelope /> Daflowess.group@gmail.com </a> </div>
            <div><FaPhoneAlt /> +212602790203 </div>
          </div>
        </footer>
        <footer className='footerMobile'>
          <div className='iconsOneTwo'>
              <div><FaPhoneAlt /> +212602790203 </div>
              <div><FaWhatsapp /> <a href="." target='_blank' rel='noreferrer'><ReactWhatsapp className='whatsapp' number="+212602790203">+212602790203</ReactWhatsapp></a></div>      
              <div><FaFacebook /><a href="https://www.facebook.com/profile.php?id=100092597575369" target='_blank' rel='noreferrer'> Darkaoui Advisory</a> </div>
              <div><a href="https://mail.google.com/mail/u/0/?hl=fr#search/daflowess.group%40gmail.com?compose=new" target='_blank' rel='noreferrer'> <FaEnvelope /> Daflowess.group@gmail.com </a> </div>
          </div>
          <div className='address'>
            Adresse: LOT ZAITOUNE N°38 JNANE ILLANE, SAFI, MAROC
          </div>
        </footer>
      </div>
    </>
  )
}

export default footer