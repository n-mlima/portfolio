import { useState } from 'react';
import styles from '../NavMenu/styles.module.css'
import logo from '/src/assets/imagens/logo.png';

const NavMenu = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  return (
    <nav className={`${styles.navBar} max-width mb0`}>
      <div className={styles.divNavBar}>
        <a href="/">
        <img src={logo} alt="Nailson Lima" />
        </a>
        <ul className={styles.nav_links}>
          <li className={styles.li_links}><a href="/" className={styles.nav_links_item}>Início</a></li>
          <li className={styles.li_links}><a href="#skills" className={styles.nav_links_item}>Habilidades</a></li>
          <li className={styles.li_links}><a href="#projects" className={styles.nav_links_item}>Projetos</a></li>
          <li className={styles.li_links}><a href="#contacts" className={styles.nav_links_item}>Contatos</a></li>
        </ul>
        <div className={styles.nav_mobile}>
          <i className={styles.mob_list} onClick={toggleMobileNav}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </i>
          <ul className={`${styles.nav_links_mobile} ${mobileNavActive ? styles.active : ''}`}>
            <li className={styles.li_links}><a href="#header_div" className={styles.nav_links_item}>Início</a></li>
            <li className={styles.li_links}><a href="#skills" className={styles.nav_links_item}>Habilidades</a></li>
            <li className={styles.li_links}><a href="#projects" className={styles.nav_links_item}>Projetos</a></li>
            <li className={styles.li_links}><a href="#contacts" className={styles.nav_links_item}>Contatos</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;