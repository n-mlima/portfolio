
import styles from '../Skills/styles.module.css'
import Cards from '../Cards'
import img from '/src/assets/imagens/react.png';
import img2 from '/src/assets/imagens/git-vs-github.ico';
import img3 from '/src/assets/imagens/mysql.png';
import img4 from '/src/assets/imagens/python.png';

const Skills = () => {
    return (
    <section id="skills" className={styles.sectionSkills}>
        <div className='divSkill'>
            <h1>Minhas Habilidades</h1> 
            <p>Conheça as skills que domino e utilizo para criar meus projetos</p>
            <div className={styles.divSkills}>
                <Cards title={"React Js"} image={img} description={"Desenvolvimento de aplicações WEB."}/>
                <Cards title={"Git/Github"} image={img2} description={"Ferramentas de versionamento e controle de códigos."}/>
                <Cards title={"MySQL"} image={img3} description={"Ferramentas de gerenciamento de banco de dados."}/>
                <Cards title={"Python"} image={img4} description={"Conhecimentos e experiências em python "}/>
 
            </div>
            
        </div>
        
    </section>
    );
  };
  
  export default Skills;