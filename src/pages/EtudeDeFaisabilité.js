import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import étudeDeFaisabilité from '../images/étudeDeFaisabilité.png'
import backgroundGray from '../images/backgroundGray.png'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import './Service.css'


const EtudeDeFaisabilité = () => {
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
        <p className='backgroundText'>Étude De Faisabilité D’un Projet</p>
      </div>
      <section className='sectionImgService'>
        <div className='sectionImg'>
          <img style={{width:'100%', height:'100%'}} src={étudeDeFaisabilité} alt="" text='' />
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
        <p className='titleDef'>Étude De Faisabilité D’un Projet</p>
        <p className='bodyDef'>
          la psychothérapie est « un traitement psychologique pour un trouble mental, pour des perturbations comportementales ou pour tout autre problème entraînant une souffrance ou une détresse psychologique qui a pour but de favoriser, chez le patient, des changements significatifs dans son fonctionnement cognitif, émotionnel ou comportemental, dans son système interpersonnel, dans sa personnalité ou dans son état de santé.
          <br/><br/>
          <p className='sousTitreDef'>Les bienfaits de la psychothérapie</p>
          
          Cesser de souffrir psychologiquement (phobies, angoisses, anxiété, panique, déprimes récurrentes...).
          Régler des problèmes affectifs ou relationnels (obsessions, timidité, estime de soi, échecs amoureux...).
          Modifier des comportements qui nuisent au bien-être (stress post-traumatique, dépendances diverses, maux imaginaires, dysfonctions sexuelles...).
          
          Faire face à une crise existentielle et redéfinir ses objectifs de vie (après quoi je cours?, réorientation de carrière...).
          D'autres y ont également recours, non pas tant pour régler des problèmes spécifiques, mais pour acquérir de nouveaux outils afin de se réaliser pleinement ou pour améliorer l'adéquation entre leurs valeurs et la réalité de leur vie.
          
          <p className='sousTitreDef'>Bien-être et développement personnel</p>
          
          Meilleure estime de soi et connaissance plus précise de ses besoins
          
          <p className='sousTitreDef'>La Thérapie cognitive et comportementale</p>
          
          Une TCC est une thérapie brève, validée scientifiquement qui porte sur les interactions entre pensées, émotions et comportements. Ces thérapies se concentrent sur les problèmes actuels de la personne, tout en prenant en compte leurs causes historiques. Elles aident à progressivement dépasser les symptômes invalidants et visent à renforcer les comportements adaptés. Une TCC s'appuie sur différentes techniques qui aident le patient à identifier les mécanismes à l'origine de ses difficultés, à expérimenter de nouveaux comportements et à sortir ainsi progressivement de cercles vicieux qui perpétuent et aggravent la souffrance psychique. Elle aide la personne à mieux comprendre les schémas de pensées négatives à l'origine de comportements inadaptés qui peuvent être source de détresse psychique.
        </p>
      </section>
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

export default EtudeDeFaisabilité