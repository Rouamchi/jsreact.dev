import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import addictologie from '../images/addictologie.png'
import backgroundGray from '../images/backgroundGray.png'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import './Service.css'


const Addictiologue = () => {
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
      <div className='backgroundGray'>
        <img className='backgroundImage' src={backgroundGray} alt="" />
        <p className='backgroundText'>Addictiologie</p>
      </div>
      {/* <div className='nosServices'>Nos Services</div>
      <p className='underTitle'></p> */}
      <section className='sectionImgService'>
        <div className='sectionImg'>
          <img src={addictologie} alt="" text='' />
        </div>
        <div className='sectionService'>
          <h5 className='nosServices'>Nos Services</h5>
          <ul>
            <li>
              <NavLink className="serviceItem" to="/psychiatre">
                {" "}Psychiatre{" "}
              </NavLink>
            </li>
            <li>
              <NavLink className="serviceItem" to="/psychothérapeute">
                {" "}Psychothérapeute{" "}
              </NavLink>
            </li>
            <li>
              <NavLink className="serviceItem" to="/addictiologue">
                {" "}Addictiologue{" "}
              </NavLink>
            </li>
            <li>
              <NavLink className="serviceItem" to="/sexologue">
                {" "}Sexologue{" "}
              </NavLink>
            </li>
            <li>
              <NavLink className="serviceItem" to="/gerontoPsychiatrie">
                {" "}GerontoPsychiatrie{" "}
              </NavLink>
            </li>
            <li>
              <NavLink className="serviceItemCantact" to="/Spécialités">
                {" "}Tous Mes Services{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <p className='titleDef'>Addictologie</p>
        <p className='bodyDef'>
          L'addictologie est la spécialité de la médecine consacrée à l'étude et la prise en charge des addictions. Celles-ci désignent un asservissement à certaines substances ou activités, associé à une dépendance du corps et de l'esprit. Cette spécialité, récente, regroupe dans un cadre commun des dépendances à des produits (alcool, drogues, tabac, alimentation),et des dépendances « sans produit » : jeux d'argent, de hasard, pratiques sexuelles, jeux vidéos, achat compulsif, cyberaddiction…
          <br /><br />
          Ces addictions ont en commun des comportements (besoin irrépressible, impossibilité à arrêter, sevrage en cas d'arrêt) et des conséquences similaires (désocialisation, isolement, dépression, délinquance…).
          <br /><br />
          L'addictologue reçoit toutes personnes présentant des problèmes de dépendance vis-à-vis d'une substance, licite ou non, ou d'un comportement :
          <ul className='ulDef'>
            <li>- le tabac (nicotine)</li>
            <li>- l'alcool</li>
            <li>- le cannabis</li>
            <li>- les opiacées (héroïne, morphine)</li>
            <li>- la cocaïne</li>
            <li>- l'ecstasy</li>
            <li>- les jeux d'argent</li>
            <li>- les jeux de hasard</li>
            <li>- le sexe</li>
            <li>- les achats compulsifs</li>
          </ul>
        </p>
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

export default Addictiologue