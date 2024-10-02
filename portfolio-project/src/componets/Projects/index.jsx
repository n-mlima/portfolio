
import styles from '../Projects/styles.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Projects = () => {
  const settings = {
    dots: true, // Mostrar indicadores dos slides
    infinite: true, // Loop infinito
    speed: 600, // Velocidade da transição
    slidesToShow: 1, // Quantos slides serão mostrados de cada vez
    slidesToScroll: 1, // Quantos slides serão rolados por vez
    autoplay: true, // Reproduzir automaticamente
    autoplaySpeed: 3000, // Intervalo entre cada slide
    arrows: true, // Mostrar setas de navegação
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Ocultar setas para telas menores
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // Ocultar os pontos em resoluções bem pequenas
        },
      },
    ],
  };

  return (
    <section id="projects" className={styles.sectionProjects}>
      <div className={styles.divProjects}>
        <h1>Meus Projetos</h1>
        <p>Confira meus projetos concluídos e em andamento</p>
      </div>
      <Slider {...settings} className={styles.sliderProjects}>
        <div className='central'>
            <div className={styles.projectItem}>
                <div className={styles.projectList}>
                    <img className={styles.imgProjects} src="/src/assets/imagens/dashboard.png" alt="Dashboard" />
                </div>  
                <div className={styles.liProjectsDesc}>
                    <h2>Dashboard</h2>
                    <p>Ferramenta de gerenciamento de fornecedores. OBS: Para fazer login na Aplicação
                        utilize a palavra "admin" no campo de login e senha.</p>
                    <div id={styles.divLink}>
                    <a id={styles.link} href="https://curious-gumdrop-d1dcb6.netlify.app" target="_blank" rel="noreferrer">Ver Aplicação</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='central'>
            <div className={styles.projectItem}>
                <div className={styles.projectList}>
                    <img className={styles.imgProjects} src="/src/assets/imagens/calc.png" alt="Calculadora" />
                </div>  
                <div className={styles.liProjectsDesc}>
                    <h2>Calculadora</h2>
                    <p>Calculadora que realiza as principais operações básicas da matemática e possui o recurso para alternar entre tema claro/escuro.</p>
                    <div id={styles.divLink}>
                    <a id={styles.link} href="https://calc-dun-omega.vercel.app/" target="_blank" rel="noreferrer">Ver Aplicação</a>
                    </div>
                </div>
            </div>
        </div>   
        <div className='central'>
            <div className={styles.projectItem}>
                <div className={styles.projectList}>
                    <img className={styles.imgProjects} src="/src/assets/imagens/tic-tac-toe.png" alt="Jogo da velha" />
                </div>  
                <div className={styles.liProjectsDesc}>
                    <h2>Jogo da Velha</h2>
                    <p>Clássico jogo da velha.</p>
                    <div id={styles.divLink}>
                    <a id={styles.link} href="https://game-tic-tac-toe-lyart.vercel.app/" target="_blank" rel="noreferrer">Ver Aplicação</a>
                    </div>
                </div>
            </div>
        </div>    
        <div className='central'>
            <div className={styles.projectItem}>
                <div className={styles.projectList}>
                    <img className={styles.imgProjects} src="/src/assets/imagens/notes.png" alt="Lista de tarefas" />
                </div>  
                <div className={styles.liProjectsDesc}>
                    <h2>Lista de Tarefas</h2>
                    <p>Realiza o cadastro, alteração de status e exclusão de atividades.
                        Projeto criado com reactJs e nodeJs com api de CRUD.</p>
                    <div id={styles.divLink}>
                    <a id={styles.link} href="https://notes-nlima.netlify.app" target="_blank" rel="noreferrer">Ver Aplicação</a>
                    </div>
                </div>
            </div>
        </div>    
      </Slider>
    </section>
  );
};

export default Projects;