import React, { useState } from 'react';
import { Media } from '../images/index'
import './Galerie.css'

const Galerie = () => {
  const [file, setFile] = useState(null);
  return (
    <>
      <h2 style={{ marginTop: '70px' }}>Que soigne un Psychiatre ?</h2>
      <section className='cabinetDescription'>
        <p>
          Le Psychiatre est un avant tout un médecin. Il soigne donc les maladies psychiques. Son rôle est la prévention et le soulagement du patient. Le psychiatre s'assure que vous n'êtes pas un risque pour vous ou pour les autres. Pour cela il a recours aux médicaments lorsque cela est nécessaire.
          Il est le seul praticien à pouvoir vous établir une ordonnance. Le psychiatre soulage mais ne soigne pas. La prise de médicaments (antidépresseur, anxiolytique...) peut être nécessaire dans certains cas et c'est sans culpabilité qu'il faut parfois se résoudre à en prendre. Cela permet de stabiliser son état psychique et d'être plus apte à entamer un psychothérapie en parallèle.
        </p>
        <p>
          Le cabinet du Dr Abderrahim LOURIDI est un espace accueillant, confortable, chaleureux et amical pour permettre l'interaction un à un, dans un contexte de soutien et de confidentialité optimaux. Nous accueillons les adolescents, adultes et les couples en nous engageant à offrir à chacun les soins et le soutien qui conviennent le mieux à ses besoins.
        </p>
      </section>
      <h2>Photos de notre Cabinet:</h2>
      <section className='galerieParent'>
        {
          Media.map((file, index) => (
            <div className='photos' key={index} onClick={() => setFile(file)}>
              {
                file.type === 'img'
                  ? <img src={file.url} alt='' />
                  : <video rc={file.url} muted />
              }
              {/* <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />
            <img src={img11} alt="" />
            <img src={img12} alt="" /> */}
            </div>
          )

          )
        }
        <div className='popupImage' style={{ display:file ? 'block' : 'none'}}>
          <span onClick={() => setFile(null)}>&times;</span>
          {
            file?.type === 'video'
              ? <video src={file?.url} muted autoPlay controls />
              : <img src={file?.url} />
          }
        </div>
      </section>
    </>
  )
}

export default Galerie