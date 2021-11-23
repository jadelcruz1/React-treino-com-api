import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'



function Home(){

    return(
        <section className={styles.home_container}> 
            <h1>Home</h1>

            <p> Conteúdo da página  </p> 

            {/*<img src={savings} alt="Costs" colocar a imagem do bicho*/}

            <LinkButton to="/newproject" text="Criar Projeto" />         

          

           
        </section>
       
    )

}

export default Home