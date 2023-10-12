import React from 'react'
import Header from '../components/Header'
import psychiatre from '../images/psychiatre.png'
import backgroundGray from '../images/backgroundGray.png'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import Footer from '../components/Footer'
import './Service.css'

const Psychiatre = () => {
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
        <p className='backgroundText'>Psychiatrie</p>
      </div>
      <section className='sectionImgService'>
        <div className='sectionImg'>
          <img src={psychiatre} alt="" text='' />
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
                {" "}Geronto-Psychiatrie{" "}
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
        <p className='titleDef'>Psychiatre</p>
        <p className='bodyDef'>
          Un psychiatre est un medecin spécialisé en santé Mentale, exerçant la psychiatrie. Il diagnostique, traite et tente de prévenir la souffrance psychique et les les maladies mentales.
          <br />
          Le rôle du psychiatre est d'établir un diagnostic basé sur une évaluation complète incluant :

          <ul className='ulDef'>
            <li>- Un entretien psychiatrique et une évaluation psychologique complète</li>
            <li>- Un bilan biologique</li>
            <li>- Une imagerie cérébrale.</li>
          </ul>

          En fonction du diagnostic, le psychiatre peut proposer :

          <ul className='ulDef'>
            <li>- Une psychothérapie</li>
            <li>- Des médicaments</li>
            <li>- Des techniques de neurostimulation.</li>
          </ul>

          Les troubles qui entrent dans le champ de la psychiatrie sont nombreux :

          <ul className='ulDef'>
            <li>- La Dépression</li>
            <li>- Les Phobies</li>
            <li>- Les Troubles de sommeil</li>
            <li>- Les troubles Anxieux (Attaque de panique, Trouble de l'anxiété généralisé....)</li>
            <li>- L'état de stress post traumatique</li>
            <li>- Le Trouble obsessionnel compulsif</li>
            <li>- Les troubles Bipolaires</li>
            <li>- La schizophrénie</li>
            <li>- Les troubles alimentaires ( Anorexie - Boulimie)</li>
            <li>- Les Démences</li>
            <li>- Les troubles psychotiques</li>
            <li>- Les troubles de la personnalité</li>
            <li>- Les addictions</li>
            <li>- Les troubles sexuels</li>
          </ul>
          NB: Selon les estimations de l'Organisation Mondiale de la Santé (OMS), une personne sur quatre de la population mondiale est amenée à souffrir d'un trouble mental au cours de son existence, sous forme de troubles anxieux ou dépressifs, d'addiction à des drogues ou à l'alcool. Cela correspond aujourd'hui à plus de 1.500.000.000 personnes.
          <br/><br/>
          Selon l'organisation, en moyenne, 800 000 personnes se suicident chaque année, dont 86% dans les pays à faible revenu et à revenu intermédiaire. Plus de la moitié d'entre elles ont entre 15 et 44 ans. Les troubles mentaux sont l'une des causes principales de suicide que l'on peut traiter, mais l'accès au soin reste limité dans ces pays à cause, d'une part, du faible nombre d'intervenants en santé mentale, et d'autre part, du fait de la «honte» supposée à recourir à ces professionnels de la santé mentale
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

export default Psychiatre