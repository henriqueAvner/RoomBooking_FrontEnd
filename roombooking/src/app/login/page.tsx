import Image from 'next/image';
import Link from 'next/link';
import styles from './login.module.css'; 
export default function Login() {
    return (
        <>
        <main className={styles.main}>
          <h1 className={styles.title}>Room Booking</h1>
          <form className={styles.form}>
            <div className={styles.inputContainer}>
                <input type="text" name="email" id="email" className={styles.input} placeholder="Email" />
            </div>
            <div className={styles.inputContainer}>
                <input type="password" name="password" id="password" className={styles.input} placeholder="Password" />
            </div>
            <div className={styles.buttonsContainer}>
              <Link href={"/home"}>
                <button className={styles.button}>Entrar</button>
              </Link>
              <Link href={"/"}>
                <button className={styles.button}>Voltar</button>
              </Link>
            </div>
          </form>
          <div className={styles.hotel}>
            <Image src="/images/initial-hotel.jpg" width={1520} height={760} alt={"Imagem de uma piscina de um hotel"} />
          </div>
        </main>
        </>
    )
}
