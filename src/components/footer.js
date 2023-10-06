import './Footer.css'
import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const footer = () => {
  return (
    <>
      <div>
        <footer>
          <div className='address'>
            Adresse: 6 Bd Kinidy, Imm Achifaa,4eme Etage, bd kinidy,
            en face l'hopital mohamed V, Safi, 46000, Maroc
          </div>
          <div className='icons1'>
            <div><FaFacebook /> Abderrahim LOURIDI </div>
            <div><FaWhatsapp /> +212678572247 </div>
          </div>
          <div className='icons2'>
            <div><FaEnvelope /> Abderrahimlouridi@gmail.com </div>
            <div><FaPhoneAlt /> +212524461417 </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default footer