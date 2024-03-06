import React from 'react';
// import { Media } from '../images/index'
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'
import img6 from '../images/img6.jpeg'
// import img7 from '../images/img7.jpeg'
// import img8 from '../images/img8.jpeg'
// import img9 from '../images/img9.jpeg'
// import img10 from '../images/img10.jpeg'
// import img11 from '../images/img11.jpeg'
// import img12 from '../images/img12.jpeg'
import './Galerie.css'

const Galerie = () => {

  return (
    <>
      <h2 className='que' style={{ marginTop: '100px' }}>
        Salle de formation avec les équipements adéquates à événement d'entreprise</h2>
      <section className='cabinetDescription'>
        <p>
          Le Psychiatre est un avant tout un médecin. Il soigne donc les maladies psychiques. <br /> Son rôle est la prévention et le soulagement du patient. Le psychiatre s'assure que vous n'êtes pas un risque pour vous ou pour les autres. Pour cela il a recours aux médicaments lorsque cela est nécessaire.
          Il est le seul praticien à pouvoir vous établir une ordonnance. Le psychiatre soulage mais ne soigne pas. La prise de médicaments (antidépresseur, anxiolytique...) peut être nécessaire dans certains cas et c'est sans culpabilité qu'il faut parfois se résoudre à en prendre. Cela permet de stabiliser son état psychique et d'être plus apte à entamer un psychothérapie en parallèle.
          <br /><br />
          Le cabinet du Dr Abderrahim LOURIDI est un espace accueillant, confortable, chaleureux et amical pour permettre l'interaction un à un, dans un contexte de soutien et de confidentialité optimaux. Nous accueillons les adolescents, adultes et les couples en nous engageant à offrir à chacun les soins et le soutien qui conviennent le mieux à ses besoins.
          <br></br>
          Profitez d’une salle adaptée à vos besoins et choisie par vos soins, à votre goût pour organiser vos réunions en toute tranquillité. Quelques jours avant votre événement.
        </p>
      </section>
      <h2>DAF - Salle De Formation</h2>
      <section className='galerieParent'>
        <div className='photos'>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          {/* <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" /> */}
        </div>

      </section>
    </>
  )
}

export default Galerie