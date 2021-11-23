import styles from './footer.module.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'


function Footer(){

return( 
<footer className={styles.footer}> 

    <ul className={styles.social_list}>
        <li>
            <FaFacebook/>
        </li>

        <li>
            <FaInstagram/>
        </li>
          
        <li>
            <FaLinkedin/>
        </li>
                  
    </ul>

    <p  className={styles.copy_right}>
        <span> Jardel</span> &copy;2021
    
    </p>  
</footer>
    )
}

export default Footer