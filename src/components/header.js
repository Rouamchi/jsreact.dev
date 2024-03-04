import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import ReactWhatsapp from 'react-whatsapp'
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const header = () => {
  return (
    <>
      <header className="hide-when-mobile mohammed">
        <h1>
          <Link to="/">DARKAOUI ADVISORY</Link>
        </h1>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/">
              {" "}
              Accueil{" "}
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/SalleDeFormation">{" "}Salle De Formation{" "}
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/spécialités">
              {" "}
              Service{" "}
            </NavLink>
            <ul className="sub-ul textsize">
              <li>
                <NavLink className="textsize" to="/conseilDeGestion">
                  {" "}Conseil De Gestion{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="textsize" to="/psychothérapeute">
                  {" "}Psychothérapeute{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="textsize" to="/addictiologue">
                  {" "}Addictiologue{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="textsize" to="/sexologue">
                  {" "}Sexologue{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="textsize" to="/gerontoPsychiatrie">
                  {" "}Geronto-Psychiatrie{" "}
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/contact">
              {" "}
              Contact{" "}
            </NavLink>
            <ul className="sub-ul sub-of-js textsize">
              <li>
                <FaWhatsapp className='iconsHeader' /> <a href="."><ReactWhatsapp className='whatsapp' number="+212602790203" message="" style={{backgroundColor: '#383838'}}>Whatsapp</ReactWhatsapp></a>
              </li>
              <li>
                <FaFacebook className='iconsHeader' /> <a href="https://www.facebook.com/Lour56.A" target='_blank' rel="noreferrer">Facebook</a>
              </li>
              <li>
                <FaEnvelope className='iconsHeader' /> <a href="https://mail.google.com/mail/u/0/?hl=fr#search/daflowess.group%40gmail.com?compose=new" target='_blank' rel="noreferrer">
                  Email</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>



      <header style={{ backgroundColor: "#383838", paddingLeft: '4%' }} className="show-when-mobile">
        <h1 style={{width: '95%'}}>
          <Link to="/">DARKAOUI ADVISORY</Link>
        </h1>

          <label className="absolute" For="burger">
            <i className="fas fa-bars" />
          </label>
          <input id="burger" type="checkbox" />

        <div className="show-on-click">
          <div className="main-div">
            <label AccueilFor="Accueil">
              {/* Accueil <i className="fas fa-plus" />{" "} */}
              <NavLink className="fas" to="/">{" "}Accueil{" "}</NavLink>
            </label>
            <input id="Accueil" type="checkbox" />
          </div>
          <div className="main-div">
            <label AccueilFor="SalleDeFormation">
              {/* SalleDeFormation <i className="fas fa-plus" />{" "} */}
              <NavLink className="fas" to="/salleDeFormation">{" "}Salle De Formation{" "}
              </NavLink>
            </label>
            <input id="SalleDeFormation" type="checkbox" />
          </div>
          <div className="main-div">
            <label AccueilFor="Spécialités">
              {/* Service <i className="fas fa-plus" />{" "} */}
              <NavLink className="fas" to="/spécialités">
                {" "}
                Service{" "}
              </NavLink>
            </label>
            <input id="Spécialités" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink className="textsize" to="/conseilDeGestion">
                  {" "}Conseil De Gestion{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="textsize" to="/psychothérapeute">
                  {" "}Psychothérapeute{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="textsize" to="/addictiologue">
                  {" "}Addictiologue{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="textsize" to="/sexologue">
                  {" "}Sexologue{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="textsize" to="/gerontoPsychiatrie">
                  {" "}Geronto-Psychiatrie{" "}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label AccueilFor="Contact">
              {/* Contactez-Nous <i className="fas fa-plus" />{" "} */}
              <NavLink className="fas" to="/contact">
                {" "}Contact{" "}
              </NavLink>
            </label>
            <input id="Contact" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href=".">Whatsapp<ReactWhatsapp number="+212602790203" message=""></ReactWhatsapp></a>
              </li>
              <li>
                <a href="https://www.facebook.com/Lour56.A" target='_blank' rel="noreferrer">Facebook</a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/u/0/?hl=fr#search/daflowess.group%40gmail.com?compose=new" target='_blank' rel="noreferrer">
                  Email</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default header


