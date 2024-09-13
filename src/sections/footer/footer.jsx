import styles from './footerStyles.module.css'
function Footer() { 
  return (
    <section id="footer" className={styles.container}>
        <p>
            &copy; 2024 Lokesh Jasti. 
            <br></br>
            All rights reserved.
                        
        </p>
    </section>
    
  )
}

export default Footer