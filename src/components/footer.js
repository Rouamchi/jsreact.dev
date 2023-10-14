import './Footer.css'
import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import ReactWhatsapp from 'react-whatsapp'

const footer = () => {
  return (
    <>
      <div>
        <footer>
          <div className='address'>
            Adresse: Imm Achifaa,4eme Etage, bd kinidy,
            en face l'hopital mohamed V, Safi, 46000, Maroc
          </div>
          <div className='icons1'>
            <div><FaFacebook /><a href="https://www.facebook.com/Lour56.A" target='_blank' rel='noreferrer'> Abderrahim LOURIDI</a> </div>
            <div><FaWhatsapp /> <a href="." target='_blank' rel='noreferrer'><ReactWhatsapp className='whatsapp' number="+212678572247">+212678572247</ReactWhatsapp></a></div>
          </div>
          <div className='icons2'>
            <div><a href="https://mail.google.com/mail/u/0/?hl=fr#inbox?compose=CllgCJNrcwzNgbdQPPzktPVvlSScCBJBskccNTtVfhlDCGrgmKhfjBsvpgrSxMrbfGnwvsHPLZL" target='_blank' rel='noreferrer'> <FaEnvelope /> Abderrahimlouridi@gmail.com </a> </div>
            <div><FaPhoneAlt /> +212524461417 </div>
          </div>
        </footer>
        <footer className='footerMobile'>
          <div className='iconsOneTwo'>
              <div><FaPhoneAlt /> +212524461417 </div>
              <div><FaWhatsapp /> <a href="." target='_blank' rel='noreferrer'><ReactWhatsapp className='whatsapp' number="+212678572247">+212678572247</ReactWhatsapp></a></div>      
              <div><FaFacebook /><a href="https://www.facebook.com/Lour56.A" target='_blank' rel='noreferrer'> Abderrahim LOURIDI</a> </div>
              <div><a href="https://mail.google.com/mail/u/0/?hl=fr#inbox?compose=CllgCJNrcwzNgbdQPPzktPVvlSScCBJBskccNTtVfhlDCGrgmKhfjBsvpgrSxMrbfGnwvsHPLZL" target='_blank' rel='noreferrer'> <FaEnvelope /> Abderrahimlouridi@gmail.com </a> </div>
          </div>
          <div className='address'>
            Adresse: Imm Achifaa,4eme Etage, bd kinidy,
            en face l'hopital mohamed V, Safi, Maroc
          </div>
        </footer>
      </div>
    </>
  )
}

export default footer