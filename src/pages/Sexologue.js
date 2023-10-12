import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import sexologie from '../images/sexologie.png'
import { NavLink } from 'react-router-dom'
import backgroundGray from '../images/backgroundGray.png'
import { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import './Service.css'

const Sexologue = () => {
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
        <img className='backgroundImage' backgroundImage src={backgroundGray} alt="" />
        <p className='backgroundText'>Sexologie</p>
      </div>
      <section className='sectionImgService'>
        <div className='sectionImg'>
          <img src={sexologie} alt="" text='' />
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
        <p className='titleDef'>Sexologue</p>
        <p className='bodyDef'>
          La sexologie est la branche de la médecine qui concerne la sexualité humaine et ses troubles. Son objectif est d'améliorer la santé sexuelle par la prévention (l'information et le conseil), le diagnostic, le traitement et la réhabilitation des conditions qui concernent:

          <ul className='ulDef'>
            <li>- la fonction sexuelle</li>
            <li>- l'expérience/le comportement sexuel</li>
            <li>- les questions liées à l'identité sexuelle</li>
            <li>- les traumatismes sexuels et leurs conséquences</li>
          </ul>
          Le rôle du sexologue est de trouver l'origine d'un trouble sexuel, de le soigner, mais aussi de le prévenir, les pathologies les plus fréquentes sont :
          <br /><br />

          <p className='sousTitreDef'>Chez l'homme :</p>

          <ul className='ulDef'>
            <li>- Éjaculation Précoce</li>
            <li>- Trouble de l'érection</li>
            <li>- Anxiété de performance</li>
            <li>- Éjaculation Retardée</li>
            <li>- Dépendance à la pornographie</li>
            <li>- Baisse du Désir sexuel</li>
          </ul>

          <p className='sousTitreDef'>Chez l'femme :</p>

          <ul className='ulDef'>
            <li>- le vaginisme</li>
            <li>- la dyspareunie</li>
            <li>- Baisse du Désir sexuel</li>
            <li>- Trouble de l'orgasme</li>
          </ul>
        </p>
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
      <Footer />
    </>
  )
}

export default Sexologue