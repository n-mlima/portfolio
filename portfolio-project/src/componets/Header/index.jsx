
import styles from '../Header/styles.module.css'
import img from '/src/assets/imagens/file.png';

const Header = () => {
    return (
      <header>
        <div className={styles.divHeader} id="header_div">
          <div className={styles.headerLeft}>
            <h1 className={styles.hello}>&lt;Nailson Lima&gt;</h1>
            <p id="p-section1">
              Graduando em Análise e Desenvolvimento de Sistemas com foco em desenvolvimento full stack.
            </p>
            <a className={styles.btn} href="#contacts" id="more">Saber mais</a>
          </div>
          <div className={styles.div_img}>
             <img  className={styles.image} src={img} alt="Nailson Lima" />
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;