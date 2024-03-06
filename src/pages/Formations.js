import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import formations from '../images/formations.png'
import backgroundGray from '../images/backgroundGray.png'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import './Service.css'

const Formations = () => {
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
        <p className='backgroundText'>Formations</p>
      </div>
      <section className='sectionImgService'>
        <div className='sectionImg'>
          <img src={formations} alt="" text='' />
        </div>
        <div className='sectionService'>
          <h5 className='nosServices'>Nos Services</h5>
          <ul>
            <li>
              <NavLink className="serviceItem" to="/conseilDeGestion">
                {" "}Conseil De Gestion{" "}
              </NavLink>
            </li>
            <li>
              <NavLink className="serviceItem" to="/etudeDeFaisabilité">
                {" "}Étude De Faisabilité{" "}
              </NavLink>
            </li>
            <li>
              <NavLink className="serviceItem" to="/elaborationDuBusinessPlan">
                {" "}Élaboration Du B.P{" "}
              </NavLink>
            </li>
            <li>
              <NavLink className="serviceItem" to="/domiciliation">
                {" "}La Domiciliation{" "}
              </NavLink>
            </li>
            <li>
              <NavLink className="serviceItem" to="/formations">
                {" "}Formations{" "}
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
        <p className='titleDef'>Formations</p>
        <p className='bodyDef'>
          La psychiatrie du sujet âgé permis de mieux appréhender des pathologies psychiatriques avec leurs spécificités sémiologiques, diagnostiques et thérapeutiques. Chez le sujet âgé, une maladie psychiatrique peut se manifester sous des formes atypiques et peut être difficile à différencier du vieillissement ou d’une maladie somatique. Les principales pathologies rencontrées sont :
        
        <ul className='ulDef'>
          <li>- La Démence</li> 
          <li>- La dépression </li>
          <li>- Le délire tardif </li>
          <li>- Les troubles de sommeil</li> 
          <li>- L'anxiété </li>
          <li>- La confusion </li>
          <li>- La manie </li>
          <li>- Les addictions</li>
        </ul>
        
          La dépression comporte des formes spécifiques, des équivalents dépressifs, des facteurs de risque particuliers et une approche thérapeutique catégorielle et dimensionnelle. Son dépistage doit être amélioré. Non traitée, ses conséquences sont très dommageables
        </p>
      </section>
      <div>
        {toTopButton && (
          <ArrowUpwardIcon
            style={{
              backgroundColor: '#062a78',
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

export default Formations