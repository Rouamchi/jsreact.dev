import './Main.css'
import imgCover from '../images/imgCover.jpeg'
import imgSection from '../images/imgSection.jpeg'
import Galerie from './Galerie'
import Map from './Map'

const Main = ({ pageName, designer }) => {
  return (
    <>
      <main>

        {/* ------------------  Title  ------------------ */}

        <section className='docname'>
          <img src={imgCover} alt="" text='' />
          
          {/* <p className='coverSitation'>
          </p> */}
          <div>Dr. LOURIDI Abderrahim Spécialiste en Psychiatrie
            <p>Neuro-Psychiatre à Safi</p>
          </div>
        </section>

        {/* ------------------  Description  ------------------ */}

        <section className='docinfoparent'>
          <div className='docinfo'>
            Dr. LOURIDI Abderrahim spécialiste en Psychiatrie à Safi,<br />
            Si vous cherchez un psychiatre compétent à Safi,Dr Louridi est votre choix idéal. Avec des Décennies d'expérience, il est en mesure de diagnostiquer et de traiter une grande variété de troubles mentaux, qu'ils soient légers ou graves.
            Le Docteur Louridi est connu pour son approche empathique et personnelle de la thérapie. Il comprend que chaque patient a des besoins différents et travaille individuellement avec chacun d'eux pour trouver la solution la mieux adaptée. Il propose également
            une gamme de thérapies différentes, notamment la thérapie comportementale et cognitive, et la psychothérapie.
            Vous accueillez dans son cabinet au Imm Achifaa, 4eme Etage, bd kinidy, en face l'hopital mohamed V, Safi, Maroc.
          </div>

          {/* ------------- Pic of Description  ------------- */}

          <div className='docinfoimg'>
            <img src={imgSection} alt="" text='' />
            <p className='qui'>QUI EST Dr. LOURIDI?</p>
          </div>
        </section>

        {/* ---------------  Cabinet  --------------- */}

        <section>
          <div className='doccabinet'>CABINET</div>
          <Galerie />

          {/* ------------------  MAP  ------------------ */}

          <div className='docmap'>Obtenir l'itinéraire</div>
          <Map />
        </section>
      </main>
    </>
  )
}

export default Main