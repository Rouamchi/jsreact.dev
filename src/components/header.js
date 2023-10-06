import { Link, NavLink } from 'react-router-dom'
import './Header.css'


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
            <NavLink className="main-link" to="/spécialités">
              {" "}
              Spécialités{" "}
            </NavLink>
            <ul className="sub-ul textsize">
              <li>
                <a className='textsize' href="https://fr.wikipedia.org/wiki/Trouble_anxieux">Troubles Anxieux</a>
              </li>
              <li>
                <a className='textsize' href="https://fr.wikipedia.org/wiki/Liste_de_phobies">Phobies</a>
              </li>
              <li>
                <a className='textsize' href="https://fr.wikipedia.org/wiki/D%C3%A9pression_(psychiatrie)">Troubles Depressifs</a>
              </li>
              <li>
                <a className='textsize' href="https://fr.wikipedia.org/wiki/Trouble_obsessionnel_compulsif">Troubles Obsessif Compulsif</a>
              </li>
              <li>
                <a className='textsize' href="https://fr.wikipedia.org/wiki/Liste_des_troubles_mentaux">Troubles liés à l'âge</a>
              </li>
              <li>
                <a className='textsize' href="http://www.psychomedia.qc.ca/diagnostics/quels-sont-les-troubles-sexuels">Troubles Sexuels</a>
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
              Contact{" "}
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="">Whatssap</a>
              </li>
              <li>
                <a href="">Téléphone</a>
              </li>
              <li>
                <a href="">Email</a>
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
            <label AccueilFor="Spécialités">
              Spécialités <i className="fas fa-plus" />{" "}
            </label>
            <input id="Spécialités" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a className='textsize' href="https://fr.wikipedia.org/wiki/Trouble_anxieux">Troubles Anxieux</a>
              </li>
              <li>
                <a className='textsize' href="https://fr.wikipedia.org/wiki/Liste_de_phobies">Phobies</a>
              </li>
              <li>
                <a className='textsize' href="https://fr.wikipedia.org/wiki/D%C3%A9pression_(psychiatrie)">Troubles Depressifs</a>
              </li>
              <li>
                <a className='textsize' href="https://fr.wikipedia.org/wiki/Trouble_obsessionnel_compulsif">Troubles Obsessif Compulsif</a>
              </li>
              <li>
                <a className='textsize' href="https://fr.wikipedia.org/wiki/Liste_des_troubles_mentaux">Troubles liés à l'âge</a>
              </li>
              <li>
                <a className='textsize' href="http://www.psychomedia.qc.ca/diagnostics/quels-sont-les-troubles-sexuels">Troubles Sexuels</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label AccueilFor="js">
              Contact <i className="fas fa-plus" />{" "}
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">Whatssap</a>
              </li>
              <li>
                <a href="">Téléphone</a>
              </li>
              <li>
                <a href="">Email</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default header


