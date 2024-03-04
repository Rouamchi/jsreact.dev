import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import conseil from '../images/conseil.png'
import psychothérapeute from '../images/psychothérapeute.png'
import addictologie from '../images/addictologie.png'
import sexologie from '../images/sexologie.png'
import gérontoPsychiatrie from '../images/gérontoPsychiatrie.png'
import backgroundGray from '../images/backgroundGray.png'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import './Service.css'


const Spécialités = () => {
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
      <div className='ser'>
        <div className='backgroundGray'>
          <img className='backgroundImage' src={backgroundGray} alt="" />
          <p className='backgroundText'>Conseil De Gestion</p>
        </div>
        <section className='sectionImgService'>
          <div className='sectionImg'>
            <img src={conseil} alt="" text='' />
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
          <p className='titleDef'>Conseil De Gestion</p>
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
            <br /><br />
            Selon l'organisation, en moyenne, 800 000 personnes se suicident chaque année, dont 86% dans les pays à faible revenu et à revenu intermédiaire. Plus de la moitié d'entre elles ont entre 15 et 44 ans. Les troubles mentaux sont l'une des causes principales de suicide que l'on peut traiter, mais l'accès au soin reste limité dans ces pays à cause, d'une part, du faible nombre d'intervenants en santé mentale, et d'autre part, du fait de la «honte» supposée à recourir à ces professionnels de la santé mentale
          </p>
        </section>

        {/* -------------------------------------------------------- */}

        <div className='backgroundGray'>
          <img className='backgroundImage' src={backgroundGray} alt="" />
          <p className='backgroundText'>Psychothérapeute</p>
        </div>
        <section className='sectionImgService'>
          <div className='sectionImg'>
            <img src={psychothérapeute} alt="" text='' />
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
          <p className='titleDef'>Psychothérapeute</p>
          <p className='bodyDef'>
            la psychothérapie est « un traitement psychologique pour un trouble mental, pour des perturbations comportementales ou pour tout autre problème entraînant une souffrance ou une détresse psychologique qui a pour but de favoriser, chez le patient, des changements significatifs dans son fonctionnement cognitif, émotionnel ou comportemental, dans son système interpersonnel, dans sa personnalité ou dans son état de santé.
            <br /><br />
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
        
        {/* ------------------------------------------------------ */}

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
                <NavLink className="serviceItem" to="/conseilDeGestion">
                  {" "}Conseil De Gestion{" "}
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
  
        {/* -------------------------------------------------------- */}
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
                <NavLink className="serviceItem" to="/conseilDeGestion">
                  {" "}Conseil De Gestion{" "}
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

        {/* ----------------------------------------------------- */}
        <div className='backgroundGray'>
          <img className='backgroundImage' src={backgroundGray} alt="" />
          <p className='backgroundText'>Geronto-Psychiatrie</p>
        </div>
        <section className='sectionImgService'>
          <div className='sectionImg'>
            <img src={gérontoPsychiatrie} alt="" text='' />
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
          <p className='titleDef'>Géronto-psychiatrie</p>
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
      </div>

      {/* ------------------- For Mobile --------------------*/}

      <div className='serMobile'>
        <div className='backgroundGray'>
          <img className='backgroundImage' src={backgroundGray} alt="" />
          <p className='backgroundText'>Conseil De Gestion</p>
        </div>
        <section className='sectionImgService'>
          <div className='sectionImg'>
            <img src={conseil} alt="" text='' />
          </div>
        </section>

        <div className='sectionService'>
          <h5 className='nosServices'>Nos Services</h5>
          <ul>
            <li>
              <NavLink className="serviceItem" to="/conseilDeGestion">
                {" "}Conseil De Gestion{" "}
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

        <section>
          <p className='titleDef'>Conseil De Gestion</p>
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
            <br /><br />
            Selon l'organisation, en moyenne, 800 000 personnes se suicident chaque année, dont 86% dans les pays à faible revenu et à revenu intermédiaire. Plus de la moitié d'entre elles ont entre 15 et 44 ans. Les troubles mentaux sont l'une des causes principales de suicide que l'on peut traiter, mais l'accès au soin reste limité dans ces pays à cause, d'une part, du faible nombre d'intervenants en santé mentale, et d'autre part, du fait de la «honte» supposée à recourir à ces professionnels de la santé mentale
          </p>
        </section>

        {/* -------------------------------------------------------- */}

        <div className='backgroundGray'>
          <img className='backgroundImage' src={backgroundGray} alt="" />
          <p className='backgroundText'>Psychothérapeute</p>
        </div>
        <section className='sectionImgService'>
          <div className='sectionImg'>
            <img src={psychothérapeute} alt="" text='' />
          </div>
        </section>

        <section>
          
          <p className='titleDef'>Psychothérapeute</p>
          <p className='bodyDef'>
            la psychothérapie est « un traitement psychologique pour un trouble mental, pour des perturbations comportementales ou pour tout autre problème entraînant une souffrance ou une détresse psychologique qui a pour but de favoriser, chez le patient, des changements significatifs dans son fonctionnement cognitif, émotionnel ou comportemental, dans son système interpersonnel, dans sa personnalité ou dans son état de santé.
            <br /><br />
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

        {/* ------------------------------------------------------ */}

        <div className='backgroundGray'>
          <img className='backgroundImage' src={backgroundGray} alt="" />
          <p className='backgroundText'>Addictiologie</p>
        </div>
        <section className='sectionImgService'>
          <div className='sectionImg'>
            <img src={addictologie} alt="" text='' />
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

        {/* -------------------------------------------------------- */}
        <div className='backgroundGray'>
          <img className='backgroundImage' backgroundImage src={backgroundGray} alt="" />
          <p className='backgroundText'>Sexologie</p>
        </div>
        <section className='sectionImgService'>
          <div className='sectionImg'>
            <img src={sexologie} alt="" text='' />
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

        {/* ----------------------------------------------------- */}
        <div className='backgroundGray'>
          <img className='backgroundImage' src={backgroundGray} alt="" />
          <p className='backgroundText'>Geronto-Psychiatrie</p>
        </div>
        <section className='sectionImgService'>
          <div className='sectionImg'>
            <img src={gérontoPsychiatrie} alt="" text='' />
          </div>
        </section>

        <section>
          <p className='titleDef'>Géronto-psychiatrie</p>
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
      </div>
      <Footer />
    </>
  )
}
export default Spécialités