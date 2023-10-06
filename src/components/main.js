import './Main.css'
import img1 from '../images/img4.jpeg'
import img2 from '../images/img1.jpeg'

// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const Main = ({ pageName, designer }) => {
  return (
    <>
      <main>
        {/* {pageName}
        <br/>
        Designed By {designer} */}
        <div className='docname'>
          <img src={img1} alt="" text='' />
          <div>Dr. LOURIDI Abderrahim / Neuro-Psychiatre
            <p>Psychiatre à SAFI</p>
          </div>
        </div>

        <div className='docinfoparent'>
          <div className='docinfo'>
            La maladie est une altération des fonctions ou de la santé d'un organisme vivant.
            On parle aussi bien de la maladie, se référant à l'ensemble des altérations de santé, que d'une maladie, qui désigne alors une entité particulière caractérisée par des causes, des symptômes, une évolution et des possibilités thérapeutiques propres.
            Un ou une malade est une personne souffrant d'une maladie, qu'elle soit déterminée ou non. Lorsqu'elle fait l'objet d'une prise en charge médicale, on parle alors de patient(e).
            La santé et la maladie sont liées aux processus biologiques et aux interactions avec le milieu social et environnemental. Généralement, la maladie se définit comme une entité opposée à la santé, dont l'effet négatif est dû à une altération ou à une désharmonisation d'un système à un niveau quelconque (moléculaire, corporel, mental, émotionnel…) de l'état physiologique ou morphologique considérés comme normal, équilibré ou harmonieux. On peut parler de mise en défaut de l'homéostasie.
            La maladie est une altération des fonctions ou de la santé d'un organisme vivant.
          </div>
          <div className='docinfoimg'>
            <img src={img2} alt="" text='' />
          </div>
        </div>
        <div className='doccabinet'>
        </div>

        {/* <div className='docmap'>
          <Map google={this.props.google} zoom={14}>

            <Marker onClick={this.onMarkerClick}
              name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        </div> */}
      </main>
    </>
  )
}

export default Main