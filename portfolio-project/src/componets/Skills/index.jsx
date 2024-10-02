
import styles from '../Skills/styles.module.css'
import Cards from '../Cards'

const Skills = () => {
    return (
    <section id="skills" className={styles.sectionSkills}>
        <div className='divSkill'>
            <h1>Minhas Habilidades</h1> 
            <p>Conheça as skills que domino e utilizo para criar meus projetos</p>
            <div className={styles.divSkills}>
                <Cards title={"React Js"} image={"/src/assets/imagens/react.png"} description={"Desenvolvimento de aplicações WEB."}/>
                <Cards title={"Git/Github"} image={"/src/assets/imagens/git-vs-github.ico"} description={"Ferramentas de versionamento e controle de códigos."}/>
                <Cards title={"MySQL"} image={"/src/assets/imagens/mysql.png"} description={"Ferramentas de gerenciamento de banco de dados."}/>
                <Cards title={"Python"} image={"/src/assets/imagens/python.png"} description={"Conhecimentos e experiências em python "}/>
 
            </div>
            
        </div>
        
    </section>
    );
  };
  
  export default Skills;