import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import ReactWhatsapp from 'react-whatsapp'
import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const header = () => {
  return (
    <>
      <header className="hide-when-mobile mohammed">
        <h1>
          <Link to="/">Dr. Abderrahim LOURIDI</Link>
        </h1>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/">
              {" "}
              Accueil{" "}
            </NavLink>
            {/* <ul className="sub-ul">
              <li>
                <a href="/">Back to home</a>
              </li>
            </ul> */}
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/cabinet">
              {" "}
              Cabinet{" "}
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/spécialités">
              {" "}
              Spécialités{" "}
            </NavLink>
            <ul className="sub-ul textsize">
              <li>
                <a className='textsize' target='_blank' rel="noreferrer" href="https://fr.wikipedia.org/wiki/Trouble_anxieux">Troubles Anxieux</a>
              </li>
              <li>
                <a className='textsize' target='_blank' rel="noreferrer" href="https://fr.wikipedia.org/wiki/Liste_de_phobies">Phobies</a>
              </li>
              <li>
                <a className='textsize' target='_blank' rel="noreferrer" href="https://fr.wikipedia.org/wiki/D%C3%A9pression_(psychiatrie)">Troubles Depressifs</a>
              </li>
              <li>
                <a className='textsize' target='_blank' rel="noreferrer" href="https://fr.wikipedia.org/wiki/Trouble_obsessionnel_compulsif">Troubles Obsessif Compulsif</a>
              </li>
              <li>
                <a className='textsize' target='_blank' rel="noreferrer" href="https://fr.wikipedia.org/wiki/Liste_des_troubles_mentaux">Troubles liés à l'âge</a>
              </li>
              <li>
                <a className='textsize' target='_blank' rel="noreferrer" href="http://www.psychomedia.qc.ca/diagnostics/quels-sont-les-troubles-sexuels">Troubles Sexuels</a>
              </li>
              {/* <li className="mini-projects">
                <a href="">mini projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/contact">
              {" "}
              Contactez-Nous{" "}
            </NavLink>
            <ul className="sub-ul sub-of-js textsize">
              <li>
                {/* <a href=".">Whatsapp<ReactWhatsapp number="+212678572247" message=""></ReactWhatsapp></a> */}
                <FaWhatsapp className='iconsHeader'/> <a href="."><ReactWhatsapp className='whatsapp' number="+212678572247" message="">Whatsapp</ReactWhatsapp></a>
              </li>
              <li>
              <FaFacebook className='iconsHeader'/> <a href="https://www.facebook.com/Lour56.A" target='_blank' rel="noreferrer">Facebook</a>
              </li>
              <li>
              <FaEnvelope className='iconsHeader'/> <a href="https://mail.google.com/mail/u/0/?hl=fr#inbox?compose=CllgCJNrcwzNgbdQPPzktPVvlSScCBJBskccNTtVfhlDCGrgmKhfjBsvpgrSxMrbfGnwvsHPLZL" target='_blank' rel="noreferrer">
                  Email</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      <header style={{ backgroundColor: "steelblue" }} className="show-when-mobile">
        <h1>Dr. Abderrahim LOURIDI</h1>
        <label className="absolute" AccueilFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label AccueilFor="Accueil">
              Accueil <i className="fas fa-plus" />{" "}
            </label>
            <input id="Accueil" type="checkbox" />
            {/* <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul> */}
          </div>
          <div className="main-div">
            <label AccueilFor="Accueil">
              Accueil <i className="fas fa-plus" />{" "}
            </label>
            <input id="Accueil" type="checkbox" />
          </div>
          <div className="main-div">
            <label AccueilFor="Cabinet">
              Cabinet <i className="fas fa-plus" />{" "}
            </label>
            <input id="Accueil" type="checkbox" />
          </div>
          <div className="main-div">
            <label AccueilFor="Spécialités">
              Spécialités <i className="fas fa-plus" />{" "}
            </label>
            <input id="Spécialités" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a className='textsize' target='_blank' rel="noreferrer" href="https://fr.wikipedia.org/wiki/Trouble_anxieux">Troubles Anxieux</a>
              </li>
              <li>
                <a className='textsize' target='_blank' rel="noreferrer" href="https://fr.wikipedia.org/wiki/Liste_de_phobies">Phobies</a>
              </li>
              <li>
                <a className='textsize' target='_blank' rel="noreferrer" href="https://fr.wikipedia.org/wiki/D%C3%A9pression_(psychiatrie)">Troubles Depressifs</a>
              </li>
              <li>
                <a className='textsize' target='_blank' rel="noreferrer" href="https://fr.wikipedia.org/wiki/Trouble_obsessionnel_compulsif">Troubles Obsessif Compulsif</a>
              </li>
              <li>
                <a className='textsize' target='_blank' rel="noreferrer" href="https://fr.wikipedia.org/wiki/Liste_des_troubles_mentaux">Troubles liés à l'âge</a>
              </li>
              <li>
                <a className='textsize' target='_blank' rel="noreferrer" href="http://www.psychomedia.qc.ca/diagnostics/quels-sont-les-troubles-sexuels">Troubles Sexuels</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label AccueilFor="js">
            Contactez-Nous <i className="fas fa-plus" />{" "}
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href=".">Whatsapp<ReactWhatsapp number="+212678572247" message=""></ReactWhatsapp></a>
              </li>
              <li>
                <a href="https://www.facebook.com/Lour56.A" target='_blank' rel="noreferrer">Facebook</a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/u/0/?hl=fr#inbox?compose=CllgCJNrcwzNgbdQPPzktPVvlSScCBJBskccNTtVfhlDCGrgmKhfjBsvpgrSxMrbfGnwvsHPLZL" target='_blank' rel="noreferrer">
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


