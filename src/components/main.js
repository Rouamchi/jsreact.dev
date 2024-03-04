import './Main.css'
import DAFCover from '../images/DAFCover.png'
import imgSection from '../images/imgSection.png'
import Galerie from './Galerie'
import ToTopButton from './ToTopButton'
import Map from './Map'

const Main = () => {
  return (
    <>
      <main>

        <section className='docname'>
          <img src={DAFCover} alt="" text='' />
          <div>DARKAOUI ADVISORY FLOWESS
            <p style={{ color: 'orange', fontFamily: 'arial' }}>Formation Professionnelle & Solutions de Gestion</p>
          </div>
        </section>

        <section className='docinfoparent'>
          <div className='docinfo'>
            <p>Dr. LOURIDI Abderrahim Spécialiste en Psychiatrie à Safi.<br /></p>
            <br />
            <p>Déplômé de faculté de médecine et de pharmacie de Rabat.<br />
              Chef de service psychiatrie a hopital khouribga (1993-1996).<br />Chef de service psychiatrie a hopital Med V Safi (1996-2016). <br /></p>
            <br />
            <p>Si vous cherchez un psychiatre compétent à Safi, Dr Louridi est votre choix idéal.<br />Avec des décennies d'expérience, il est en mesure de diagnostiquer et de traiter une grande variété de troubles mentaux, qu'ils soient légers ou graves. <br />
              Le Docteur Louridi est connu pour son approche empathique et personnelle de la thérapie. Il comprend que chaque patient a des besoins différents et travaille individuellement avec chacun d'eux pour trouver la solution la mieux adaptée. Il propose également
              une gamme de thérapies différentes, notamment la thérapie comportementale et cognitive, et la psychothérapie.</p>
          </div>

          <div className='docinfoimg'>
            <img src={imgSection} alt="" text='' />
            <p className='qui'>QUI EST Dr. LOURIDI?</p>
          </div>
        </section>

        <section>
          <div className='doccabinet'>Salle de Formation</div>
          <Galerie />

          <div className='docmap'>Obtenir l'itinéraire</div>
          <Map />
          <ToTopButton />
        </section>

      </main>
    </>
  )
}

export default Main