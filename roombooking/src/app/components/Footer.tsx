import Link from "next/link"
import styles from "./Footer.module.css"
export default function Footer() {
    return (
      
       
            <footer className={`${styles.footer}`}>
                <div className={styles.container}>
                    <p className={styles.text}>Powered by: Avner</p>
                    <Link href="https://www.linkedin.com/in/henriqueavnerdev/" target="_blank" rel="noopener noreferrer" className={`${styles.link}`}>Linkedin</Link>
                </div>
            </footer>
    

    )
}